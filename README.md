# Skriverier

Skriverier til blogger. Blanding av utkast og ferdige ting som er publisert.

## Publiserte blogger

Se listen over publiserte blogger [her](./publiseringer.md).

## Oppsett

### Blogger

Sett opp metadata som dette i toppen av bloggen.

```
---
title: Tittel på bloggen
date: ÅÅÅÅ-MM-DD
published: lenke til der bloggen er publisert
---
```

Brukes til å generer liste med publiserte blogger. Alle felter må være fylt ut for at bloggen skal tas med i listen.

### Oppdatere liste med publiserte blogger

For å oppdatere tabellen med publiserte blogger basert på metadata i bloggene, kjør

```bash

npm run update-publication-table

```

## License

The content of this repository is © Johan Magne Haugland. All rights reserved.
See the [LICENSE](LICENSE.md) file for details.
