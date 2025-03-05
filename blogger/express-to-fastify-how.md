---
title: How I Ported an App from Express to Fastify
date: 2023-10-31
published: https://amedia.github.io/jotter/2023/express-to-fastify-how/
---

# How I Ported an App from Express to Fastify

This is the second part of a mini series of blog posts on the journey from Express to Fastify. This post describes the how. If you are interested in the why, have a look at [the first part](../express-to-fastify-why/).

## What is Fastify?

Fastify is a _Fast and low overhead web framework, for Node.js_ in the words of [their website](https://fastify.dev/). It is supposed to be fast, simple, minimal, fun and to have an infrastructure of reusable plugins. The core building blocks are

- Register/Plugins
- Decorators
- Hooks
- Services/Routes

We'll shortly dive into the specifics of what all these concepts are, but first let's discuss our context, that is, the app we have ported.

### The app

The app is a small Node server for a React web application. The main backend is written as a standalone Java app. What the frontend server side needs to handle is:

1. Serving static assets, such as the javascript bundle and images.
1. Serving the app manifest.
1. Serving a ping route used in the Kubernetes readiness probe.

In the server code we also need to configure the server. Relevant aspects are

1. Initiating a server instance with config such as proxy trusting.
1. Header management for e.g.
   - CORS
   - Cache
1. Set up support for body parsing.
1. Setting up logging and error management.
1. Finally configuring the server to listen on the desired port and interfaces.
   - That last point (interfaces) would end up being one of the true gotchas of the process.

The minimalism of this app turned out to highlight and demonstrate the basic features and tools of Fastify in a straightforward manner, without adding too much complexity and clutter. You may find the finished app at the bottom of the article.

### Initiating the server instance

Before registering plugins you need to instantiate the server instance. You do it like this:

```javascript
import Fastify from 'fastify';

...

const fastify = Fastify({
    logger: true,
    trustProxy: true
});
```

Here we have created a Fastify instance that uses the native logger, which is a Pino instance, and with the trust proxy setting set to true. The built in logger is said to be fast and optimized for Fastify, so I have seen no reasons not to use it. There are probably cases where it doesn't have all the capabilities you need, in which case you have the option to set logger: false, and use a custom logger of your choice. The trustProxy setting sets the server to trust info from its proxy. More specifically from the docs:

> By enabling the trustProxy option, Fastify will know that it is sitting behind a proxy and that the X-Forwarded-\* header fields may be trusted, which otherwise may be easily spoofed.

For those used to Express servers, note that we don't need to configure Fastify to disable the x-powered-by header as there is no such or similar type of header here. This is probably because Fastify aims to avoid unnecessary overhead, and as such only strictly necessary headers are set up by default. One might also suspect it to be a choice for security by default; don't give potential attackers any information you don't have to give them.

### Plugins

As described in the [getting started](https://fastify.dev/docs/latest/Guides/Getting-Started) section of the Fastify docs, the advised order to set up the app is

- Fastify plugins
- Your custom plugins
- Decorators
- Hooks
- Services, which in our case are the routes.

So what are plugins? Well, everything in Fastify more or less, in the same way that everything is an object in Javascript. They contain anything you want, for example the setup of routes, utilities and config, and they are registered on your Fastify instance using the aptly named register-API. There is a lot more to say regarding plugins, but let's rather have a look at some examples.

There are core, community and custom plugins. The fifty or so core plugins are maintained by the Fastify team. These implement central server functionality such as [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and body parsing. From the test app:

```javascript
import fastifyCors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';

...

await fastify.register(fastifyFormbody);
await fastify.register(fastifyCors, {}); //The second parameter is an object of options
```

The [CORS plugin](https://github.com/fastify/fastify-cors) enables the use of CORS. I will not claim to understand all the secrets of CORS, but what I know for sure is that CORS and [vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) headers are added. As a side note, if I learned one thing from this process, it is that it's all about headers.

<img alt="HEADERS_EVERYWHERE" src="{{ '/img/2023/express-to-fastify/headers_everywhere.png' | url }}" width="735"> <br>

The [formbody plugin](https://github.com/fastify/fastify-formbody) adds parsing of url-encoded content, or more specifically for the content type application/x-www-form-urlencoded. In practice this allows post requests with the body

```
this=is&spar=ta
```

to be handled and parsed successfully as

```javascript
{
    this: 'is',
    spar: 'ta'
}
```

Note that Fastify natively supports plain text and also application/JSON, which they claim to handle super fast. As far as the author is concerned there is no reason to doubt this claim. Good stuff.

#### Community Plugins

Community plugins are custom plugins accepted by the Fastify maintainers, but not created or maintained by them. There are over 200 of them as we speak, and they can be found listed and searchable [here](https://fastify.dev/ecosystem/). Note that the Fastify team sets no guarantees for the maintenance of these plugins.

#### Custom Plugins

Finally you may register custom plugins. Creating plugins makes it possible to modularize your server, which again bolsters clean and maintainable code. An example plugin is our static router which exposes our static assets

```javascript
export async function staticRoutes(fastify, options, done) {
  await fastify.register(fastifyStatic, {
    root: rootAssets,
    prefix: '/assets/',
  });

  await fastify.register(fastifyStatic, {
    root: rootImages,
    prefix: '/images/',
    decorateReply: false,
  });

  done();
}
```

A plugin needs up to three parameters The server instance to work with, an object of options and the done function:

```javascript
function staticRoutes(fastify, options, done) {
```

The options can be any input you want to pass the plugin and the done function is used at the end of every plugin to tell Fastify that this plugin has finished loading, and that it may continue with whatever is next on the list.

After declaring the plugin the next thing we do is register the [@fastify/static](https://github.com/fastify/fastify-static) plugin used to serve static files.

```javascript
await fastify.register(fastifyStatic, {
```

This brings us to an important concept; encapsulation, which we are going to take a short detour into.

#### Encapsulation

Encapsulation ensures that what happens in plugin, stays in plugin. When you create a plugin a context is created, and none of your decorators, hooks (more on those two soon) or anything else you set up here will be available to the parent, siblings or other ancestors. This will force you to create code without cross dependencies. To learn more on plugins, for example how to handle encapsulation and distribution I would highly recommend reading this [brilliant how-to guide](https://fastify.dev/docs/latest/Guides/Plugins-Guide) on plugins.

#### Back to the plugin

This plugin serves two sets of static assets, one from the `rootAssets` location and one from the `rootImage` location. For reference these are

```javascript
const rootAssets = path.join(_dirname, '../build/assets');
const rootImages = path.join(_dirname, '../build/images');
```

where \_dirname is the current directory path. They are served under the prefix `/assets/` or `/images/`. The result is that under the api route `/images/` you will find whatever is in the folder `../build/assets` of the environment the server is running in, be that your computer, docker container or anywhere else.

#### Registering the custom plugin

Finally to register the plugin, we use the register api like this:

```javascript
import { staticRoutes } from '../lib/router.js';

...

const routesPrefix = '/your/route/prefix';

await fastify.register(staticRoutes, { prefix: routesPrefix });
```

As options we give the route a prefix, which makes sure that every static route is served under `/your/route/prefix/` giving for example images under `/your/route/prefix/images/`.

NB: Note that this specific plugin is a service, and therefore should be loaded towards the end of the server setup.

### Decorators

What are [decorators](https://fastify.dev/docs/latest/Reference/Decorators)? Though at first may cryptic, they are in fact quite simple, and I would even dare to say, intuitive. The Fastify instance, request, and reply objects, have a native set of methods. (Note that [request](https://fastify.dev/docs/latest/Reference/Request) and [reply](https://fastify.dev/docs/latest/Reference/Reply) are not the native node request and response, but custom for Fastify). They are, in the style of Fastify, designed to have minimal overhead to induce speed. If you want a custom field or method on either of these objects, that's when you reach for decorators, and there are three of them:

- decorate
- decorateRequest
- decorateReply

which decorates respectively: the server instance, request and reply.

Let's say you have a JSON object containing app manifests (as we do in the test app), which you want accessible on the server instance at all times. You then use

```javascript
fastify.decorate('manifests', JSONmanifests);
```

Now you will have a field `manifests` containing whatever is in the JSONmanifests variable on your Fastify instance. You may now for example add it as the reply body in your routes like this

```javascript
fastify.get('/manifests', (req, reply) => {
  reply.send(fastify.manifests);
});
```

Very useful indeed. The value of the field might be whatever kind of variable or object you'd like, e.g. a string, boolean or a function.

Let's say we want to decorate the reply object of every request with a function. As functions are objects, and objects are given as reference, by doing

```javascript
decorateReply('util', someUtil);
```

every reply object would share the same instance of our `someUtil` function, and . That we do not want as, from the docs:

> any mutation will impact all requests, potentially creating security vulnerabilities or memory leaks.

Instead, decorate reply with a placeholder value, null, like this:

```javascript
decorateReply('util', null);
```

In this way, the reply object is instantiated with the util field, so we avoid mutating the object after creation, which would be slow. Now we can add the `someUtil` function to the reply object at the start of each request. We could do that manually in each route, but that would neither be enjoyable nor maintainable. We need to automate , and that is where hooks enter the scene.

### Hooks

[Hooks](https://fastify.dev/docs/latest/Reference/Hooks) is how we do automation in Fastify. Let's say you want every reply object to contain a function which manages headers. This is how you could do it: (Don't worry too much about what atomizerHeader does, for the purpose of this guide: it's enough to know it is used for managing headers)

```javascript
// decorate with placeholders for optimized object handling
fastify.decorateReply('headerManager', null);

// Populate the headerManager field with a header manager.
fastify.addHook('onRequest', async (request, reply) => {
  reply.headerManager =
    await atomizerHeader.createHeaderManagerUsingDefaultConfig({
      serverName: 'aGreatServer',
      appName: 'anEquallyGreatApp',
    });

  await reply.headerManager.addLocalGroup('anEquallyGreatApp');
});
```

What we have done here, is adding an `onRequest Hook` which executes its code each time the `onRequest` event is triggered in the request lifecycle. [The internal lifecycle of Fastify](https://fastify.dev/docs/latest/Reference/Lifecycle) is divided into several steps with accompanying error messages. You can step into the execution of the lifecycle by latching onto different hooks. Some of them are the `onRequest`, `onSend` and `onError` hooks, and they are quite useful. Lets see some examples from the demo app.

Firstly, in the above code snippet we have used the onRequest hook to add a headManager to the reply object, at the start of the lifecycle of each and every request. We also add a local group for cache management. You may now use reply.headerManager in your routes like this:

```javascript
fastify.get('/', function (request, reply) {
  reply.headerManager.addHeader('x-header-name', 'header content');
  reply.headerManager.addHeader('federer-is', 'the GOAT');
  reply.send('nonsensical body for nonsensical headers');
});
```

You may also access the header manager in other hooks in the request lifecycle for further automation. To set a cache header controlling channel max age when a request fails, we use the `onError Hook`

```javascript
fastify.addHook('onError', async (request, reply) => {
  await reply.headerManager.setLocalChannelMaxAge(15);
});
```

Finally we may use the `onSend Hook` to build a `headers` object, and add all headers to the reply object in the moment before it is sent:

```javascript
fastify.addHook('onSend', async (request, reply) => {
  const headers = reply.headerManager.build();
  Object.keys(headers).forEach((key) => {
    reply.header(key, headers[key]);
  });
});
```

Note: The `reply.header` method is the native reply method used to add headers to the reply.

In this way we have automated the header lifecycle using hooks. Personally I have found it an intuitive and fun tool to work with.

### Services/Routes

Setting up [routes](https://fastify.dev/docs/latest/Reference/Routes/) is simple and intuitive using Fastify, especially if you are used to Express syntax. Use `fastify.get` to create a get endpoint, `fastify.post` for a post endpoint and so forth. Here's some examples from our custom plugin `routes`:

```javascript
export async function routes(fastify, options, done) {
  await fastify.register(fastifyStatic, {
    root: '/',
    serve: false,
  });

  fastify.get('/', (req, reply) => {
    reply.type('text/html');
    reply.send('<div id="root"></div>');
  });

  fastify.get('/manifest.json', function (req, reply) {
    reply.sendFile(rootManifestJson);
  });

  fastify.get('/manifest', (req, reply) => {
    reply.send(fastify.manifests.appManifest);
  });

  done();
}
```

Note that we have started by registering the fastify-static plugin within the encapsulated plugin. This is to gain access to the sendFile method which fastify-static decorates the reply object with. We then create three routes and use methods on the reply object to configure the reply from the endpoints. The [reply](https://fastify.dev/docs/latest/Reference/Reply) and [request](https://fastify.dev/docs/latest/Reference/Request) reference docs tells you about all the methods.

A more Hapi-like, object version is supported as well, through the [full declaration](https://fastify.dev/docs/latest/Reference/Routes/#full-declaration)

### Listen

Finally we need to start the server, and make it listen on the desired port and also interface. We do it like this

```javascript
fastify.listen({ port: 9999, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server process has pid ${process.pid}`);
  fastify.log.info(`Api routes available under ${address}${routesPrefix}`);
});
```

This tells the native Fastify server to listen at the given port at **all available IPv4 interfaces**. I used more time than I care to admit in realizing that the Fastify server listens only on localhost as default. To listen at all interfaces the option: `host: '0.0.0.0'` has to be used.

The rest is error handling and logging based on the native Fastify logger.

### A word or two on error handling

You might have noticed that we have done nothing at all to handle exceptions in the routes. This is because the root error handler in Fastify natively handles this with precise status codes and messages. If you want to make custom error handlers in different encapsulations, use [setErrorHandler](https://fastify.dev/docs/latest/Reference/Server/#seterrorhandler). Regarding uncaught exceptions the best practice is to crash. Finally note that Fastify follows the following filosofy on error handling:

> The developer is responsible for making sure that the errors are handled properly.

Have a look at the [reference page on errors](https://fastify.dev/docs/latest/Reference/Errors/) in the Fastify docs for more.

### Afterthoughts

Some thoughts and todos:

- Should one set up the server to listen on external interfaces as standard?
  - It would probably be better to set up a dev-start option, which only listens on localhost.
- Which measures should one make to ensure the most robust error handling outside of routes?
- Fastify has native support for TypeScript, and writing the server in TypeScript should be a natural next step on the todo list.

Anything else that should be added to the list? Don't hesitate to let me know!

Below is the full app for reference.

### app.js

```javascript
import Fastify from 'fastify';
import { createManifests } from '../lib/manifests.js';
import fastifyFormbody from '@fastify/formbody';
import fastifyCors from '@fastify/cors';
import { routes, staticRoutes, contextRoutes } from './router.js';
import atomizerHeader from '@amedia/atomizer-header';

const routesPrefix = '/your/route/prefix';
const contextRoutesPrefix = '/your/context/route/prefix';

const fastify = Fastify({
  logger: true,
  trustProxy: true,
});

// Setup request bodyparsers. JSON and plain text is natively supported
await fastify.register(fastifyFormbody);

// Add cors
await fastify.register(fastifyCors, {});

// Setup manifests
fastify.decorate('manifests', createManifests(fastify.log));

// decorate with placeholders for optimized object handling
fastify.decorateReply('headerManager', null);

// Manage headers through request lifecycle
fastify.addHook('onRequest', async (request, reply) => {
  reply.headerManager =
    await atomizerHeader.createHeaderManagerUsingDefaultConfig({
      serverName: 'aGreatServer',
      appName: 'anEquallyGreatApp',
    });

  await reply.headerManager.addLocalGroup('anEquallyGreatApp');
});

fastify.addHook('onSend', async (request, reply) => {
  const headers = reply.headerManager.build();
  Object.keys(headers).forEach((key) => {
    reply.header(key, headers[key]);
  });
});

fastify.addHook('onError', async (request, reply) => {
  await reply.headerManager.setLocalChannelMaxAge(15);
});

// Register routes
await fastify.register(staticRoutes, { prefix: routesPrefix });
await fastify.register(routes, { prefix: routesPrefix });
await fastify.register(contextRoutes, { prefix: contextRoutesPrefix });

fastify.listen({ port: 9999, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server process has pid ${process.pid}`);
  server.log.info(`Api routes available under ${address}${routesPrefix}`);
});
```

### router.js

```javascript
import { fastifyStatic } from '@fastify/static';
import { fileURLToPath } from 'url';
import path from 'path';

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const rootAssets = path.join(_dirname, '../build/assets');
const rootImages = path.join(_dirname, '../build/images');
const rootManifestJson = path.join(_dirname, '../build/manifest.json');

export async function staticRoutes(fastify, options, done) {
  await fastify.register(fastifyStatic, {
    root: rootAssets,
    prefix: '/assets/',
  });

  await fastify.register(fastifyStatic, {
    root: rootImages,
    prefix: '/images/',
    decorateReply: false,
  });

  done();
}

export async function routes(fastify, options, done) {
  await fastify.register(fastifyStatic, {
    root: '/',
    serve: false,
  });

  fastify.get('/', (req, reply) => {
    reply.type('text/html');
    reply.send('<div id="root"></div>');
  });

  fastify.get('/manifest.json', function (req, reply) {
    reply.sendFile(rootManifestJson);
  });

  fastify.get('/manifest', (req, reply) => {
    reply.send(fastify.manifests.kampanjerapport);
  });

  done();
}

export async function contextRoutes(fastify, options, done) {
  fastify.get('/apiadmin/ping', (req, reply) => {
    const message = `OK`;
    reply.status(200).send(message);
  });

  done();
}
```
