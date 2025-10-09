---
title: Praktisk bruk av KI som utvikler
date: ÅÅÅÅ-MM-DD
published:
---

# Praktisk bruk av KI som utvikler

## Enda en artikkel om KI

Jepp, jeg gjør det; skriver enda en blogg i havet av innhold på KI. Hvorfor? Fordi blant titler som "OpenAI just made your entire tech stack obsolete", krydret med ord og uttrykk som "tar fra deg jobben" og ikke minst "vibekoding", savner jeg noen lavmeldte stemmer som bare sier hvordan de har inkorporert nok et verktøy inn i arbeidshverdagen. Et kraftig verktøy, med tilsvarende stor slagside, og derfor med ekstra god grunn til bevissthet i bruken.

Notis: jeg bruker i denne bloggen begrepene KI og LLM om hverandre for å beskrive tjenester som eksempelvis, Claude, Gemini, Chat GPT også videre.

## Min bakgrunn

Jeg er fullstackutvikler og en typisk middels sen adopter, med sunn skepsis til alt som hypes unødig mye opp. Det siste halvåret har jeg brukt i et oppdrag hvor det ble oppfordret sterkt til høyt tempo og utstrakt bruk av KI. Jeg har derfor fått muligheten til å teste hvordan det kan brukes, og har gjort meg opp noen tanker rundt hva som fungerer mer og mindre bra.

- **bilde: her er jeg på adoption curve graf**

## Kvalitet og læring

Hvordan opprettholder man læring med et verktøy til disposisjon som kan gjøre store deler av kodingen for deg? Hvordan sikrer man kvalitet når man nesten ikke trenger å se på koden eller forholde seg til hvilke design patterns som blir brukt? Det er de to store spørsmålene jeg har ønsket å besvare, og dette er prosessen jeg har kommet frem til.

## Prosessen

### Et liv som kodearkitekt

KI må ikke ta plassen fra god planlegging. En positiv side ved å ha en agent som skriver koden din, er at du til en viss grad blir presset til å lage gode planer, ettersom det ellers kan gå i alle slags retninger. Å rulle tilbake arbeid for en udeterministisk agent er heller ikke trivielt, selv om jeg opplever at de har blitt bedre i å reversere sitt eget arbeid den siste tiden.

For å minimere dette problemet starter jeg derfor prosessen med å legge en plan for implementasjonen. Den lager jeg alene, mens jeg går, i kontorstolen, og i samarbeid med andre flinke folk alt etter kompleksitet. Målet er å ha en overordnet plan for målbildet jeg vil oppnå og verktøyene jeg vil bruke for å komme dit. Deretter presenterer jeg planen for min valgte LLM, og spikker videre på den til jeg har en liste med konkrete steg som kan implementeres ett og ett.

### Implementasjon

Når vi nå har en tydelig plan går jeg i gang med implementasjonen. Her har jeg stort sett brukt følgende fremgangsmåter, som antakelig er kjent for mange:

- Interagere med KI gjennom web-grensesnitt
  - Man mater inn kontekst manuelt gjennom brukergrensesnittet og implementerer selv koden den kommer tilbake med
  - Fordel: du har full kontroll over hva KIen har tilgang på
  - Ulempe: du må selv mate kontekst og klippe/lime kode hit og dit
- Bruke KI rett i kommandolinjen med verktøy som Claude Code eller Gemini CLI
  - Man bruker KI direkte i kommandolinjen, og den kan lese filene i repoet samt kjøre kommandoer direkte i CLIet
  - Fordel: KI har all kontekst den kan ønske om koden, og kan gjøre endringer direkte
  - Ulemper: Du deler all infoen i repoet med KI. Pass som et minimum på at det ikke er noe sensitivt der, er min grunnregel. Ubegrenset kodetilgang kan også føre med seg ubegrensede og uforutsette endringer om du ikke følger med, så pass på kvalitetskontroll! Hver commit blir sin egen lille PR.

Uansett metode ber jeg KI implementere ett enkelt steg om gangen. Når dette er gjort tester jeg, leser over koden, undersøker konsepter jeg ikke er kjent med, fikser feil eller implementasjoner jeg er uenig i, graver etter å forstå hvorfor ulike valg er tatt, refaktorerer kode jeg mener er mindre enn ideell, også videre. Til slutt commiter jeg koden, før neste steg. Kort fortalt gjennomfører jeg alle de kvalitetsgrepene jeg vanligvis ville tatt, i tillegg til at jeg graver i konsepter jeg ikke har vært borti før eller trenger en oppfriskning på. En målsetning er å aldri commite kode jeg ikke forstår. På denne måten kan man utnytte ens egen intuisjon for kodekvalitet og ha et bevisst forhold til hva man leverer, samtidig som man utnytter KIs evne til å produsere kode kjapt.

NB! En ting som alltid vil gå tapt med KI-koding er mengdetrening og muskelminnet man får ved å faktisk skriver kode.

## Noen bonuser

### Samtalepartner og beslutningsstøtte

Er du som meg en ubesluttsom person, med et behov for å ha alle detaljer under kontroll før du starter en implementasjon? Da kan KI være en utmerket sparringspartner som kan hjelpe deg med å ta valg raskere. Står jeg ovenfor en 50/50-avgjørelse, lar jeg noen gang bare KI ta valget for meg. Erfaringsmessig er det viktigere å ta et valg enn å ta det perfekte valget, og med KI er det også mye enklere å feile fort.

### PoC / demo / testing

Som hintet til i forrige avsnitt, kan man teste kjapt og feile fort med KI. Det gjør at man enkelt kan lage små og store tester av designpatterns, tredjepartsbiblioteker, UX-design, etc., med lav innsats. Da kan man også utnytte at KI ikke bryr seg om kvalitet, og dermed ikke henger seg opp i implementasjonsdetaljer underveis.

## Konklusjon

KI er et redskap med enorme kapasiteter som også kan brukes til å lage kode med høy kvalitet, men du må ha et bevisst forhold til hvordan det brukes.
