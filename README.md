# Skriverier

Skriverier til blogger. Blanding av utkast og ferdige ting som er publisert.

## Publiserte blogger

Se listen over publiserte blogger [her](./publiseringer.md).

## Oppsett

### Opprette ny blogg

For å opprette en ny blogg basert på template, kjør

```bash
npm run new-blog
```

Scriptet vil be om tittel og opprette en ny bloggfil i `blogger/`-mappen basert på templaten i `template/blogg-template.md`.

### Blogger

Alle blogger skal ha metadata i toppen:

```
---
title: Tittel på bloggen
date: ÅÅÅÅ-MM-DD
published: lenke til der bloggen er publisert
---
```

Brukes til å generere liste med publiserte blogger. Alle felter må være fylt ut for at bloggen skal tas med i listen.

### Oppdatere liste med publiserte blogger

For å oppdatere tabellen med publiserte blogger basert på metadata i bloggene, kjør

```bash
npm run update-publication-table
```

## License

The content of this repository is © Johan Magne Haugland. All rights reserved.
See the [LICENSE](LICENSE.md) file for details.
