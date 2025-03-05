---
title: Why I Decided to Port an App from Express to Fastify
date: 2023-10-26
published: https://amedia.github.io/jotter/2023/express-to-fastify-why/
---

# Why I Decided to Port an App from Express to Fastify

### And how I learned a whole lot on server setup along the way

A little heads up: This first blog post in a mini series of two, aims to shed light on why I did it. In the next, we'll focus on the how. If you don't care for the, in this case rather verbose, rational, I encourage you to skip this one altogether, and look at the practical implementation in [the second part](express-to-fastify-how.md).

## Part 1: The Why

Recently our frontend division brought up the thorny question of leaving the safe, tried and tested server shores of express.js, and venture into the relative unknown of other node server frameworks. Why would anyone consider such a difficult and dangerous voyage you ask? A journey that would take valuable time and energy from many a developer and tech lead. Well there are several reasons to do it, and also of course equally many not to. Lets have a brief look at some of them.

### Let's stay with Express because

- Express is tried and tested.
  - This is indeed a solid argument. There will be a large cost in porting _a lot_ of apps from express to something else, and there are guaranteed to be more than enough corner cases and tricky obstacles along the way.
- Express has a large community where many can help and most questions have been asked before.
- Related to the previous point, Express has a large ecosystem with lots of ready made middleware.

### Let's leave Express in the past because

- Express is not actively maintained.
  - Having _a lot_ of apps dependent on a framework without a contribution for the past one and a half year or so, feels somewhat sketchy. You never know if, and how fast future security issues will be patched, and new features are few and far between.
- Express is old and slow and does not support modern javascript.
  - Especially async await is an often mentioned need. Express 5, when released, is said to support this, though we don't know when, if ever, that is going to happen.
  - In every comparison found, Express is shown to perform significantly worse compared to all relevant competition.

Do we need the server side of our frontend apps to be, as marketing people would say; "blazingly fast"? I would guess, without too much insight on the subject, probably not. For most use cases Express is likely fast enough, but I would be surprised if there were no cases that would prove me wrong either. The fact that express seems poorly maintained lately and might never be improved upon, is however a far more concerning issue.

### So where do we go from here?

In essence it was a general feeling that staying on shore might leave us open to more risk than embarking onto open waters. The warm and cozy island of Express might wither and sink into the seas given time, or even worse, die abruptly from an eruption of a single, unhandled, critical CVE. Better to be proactive than hastily reactive. Better safe than sorry.

### But what are the possible headings?

There are several options, and I will list and briefly present a few of them. Note that my practical experience with them is limited, and my knowledge is mostly gathered from various sources with varying quality from all over the internet.

#### Koa

- A modern version of Express, though it seems to be not maintained as is the case with Express. Would therefore not solve what I consider the main issue.

#### Hono

- The new favorite amongst the cool and the hip.
- Super fast and works on any Javascript runtime, such as Bun which should be super-duper fast.
- Limited adoption and ecosystem as of now.
- Cutting edge, which is cool, but that comes at the risk of
  - Bugs.
  - Being prone to breaking changes in the future.
  - Not getting the adoption we hope for, and slowly dying.

#### Fastify

- Tried and tested over many years
- Good adoption though not anything close to Express. In the group, "the best of the rest".
- Well maintained and kept up to date over many years.
- Minimal and fast relative to Express, though slow compared to for example Hono
- Is not supported by Bun, the new and fast all-in-one Javascript runtime, though that is rumored to come. No one knows for certain though.
- Supports modern javascript such as async/await.
- Relatively similar syntax to Express, and should be one of the easier frameworks to switch into.

To me, the combination of relatively fast, modern, well maintained and widely adopted seems the right course to take. Especially when choosing one framework to rule all them apps. Had this been for a personal side project or even for a standalone app in a small company, Hono or some other cutting edge tech would probably be a fun choice. Though if I know my risk averse self right, I would probably have gone with Fastify in the latter case anyway.

Fastify it is then, and now we need to actually do the job and port an app into it. So I did, and I have written this travel log of my journey so that you (and myself in retrospect) may consider or even learn from the aha moments I had and mistakes I made along the way.
