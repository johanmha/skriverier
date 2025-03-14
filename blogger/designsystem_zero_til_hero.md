---
title: Designsystem - fra zero til hero
date: 2025-03-05
published:
---

# Designsystem - fra zero til hero

Et par disclaimers: jeg var strengt tatt ikke helt ingenting, eller zero, når jeg begynte denne læringsreisen. Jeg har jobbet med og brukt designsystemer tidligere i ulike former og fasonger, men har aldri virkelig gått i dybden på hvilke tanker og valg som inngår i designet av et skikkelig bra designsystem. Om jeg er blitt noen hero er også høyst diskutabelt, men at jeg har fått en brukbar forståelse for do's and dont's' på feltet er ikke å tøye strikken.

Til slutt før vi begynner: hvor ok språkrådet er med at jeg skriver zero til hero på norsk er jeg usikker på, men når Disney kunne gjøre det i sin 1997-klassiker, Herkules, så må det være greit at også jeg gjør det.

## Introduksjon

### Litt om hva dette ikke er (og er)

Dette er ikke en oppskrift på hvordan man bygger et designsystem. Er du ute etter det, finnes det mange gode inspirasjonskilder der ute, og her er noen av dem:

- [Her](https://storybook.js.org/tutorials/design-systems-for-developers/) har storybook oppsummert veldig mye godt og grunnleggende om hva de mener et designsystem bør være
- [Her](https://main--66b4b3beb91603ed0ab5c45e.chromatic.com/?path=/docs/docs-getting-started--docs) er portalen til Aksel, NAV sin verktøykasse for produktutvikling, som også inkluderer, (og i stor grad _er_ spør du meg), et designsystem.
- [Her](https://github.com/johanmha/yadsy) finner du mitt eget quick and dirty oppsett av et minimalt designsystem, yadsy. Det er et godt utgangspunkt med tanke på struktur og CI/CD.

Det denne bloggposten er, er i stedet en samling betraktninger på hva som gjør et godt designsystem til et godt designsystem.

### Hva snakker vi om

Ordet designsystem kan strengt tatt brukes om flere ting. I designverden kan det for eksempel være et design satt opp i eksempelvis Figma, som beskriver alt fra de minste bestanddelene som farger og fonter, til grunnkomponenter som knapper og inputfelter, til større sammenstillinger som kort, og hele sider.

Slik sett er det nært beslektet designsystemet vi snakker om i denne bloggposten: komponentbiblioteket brukt i frontend-utvikling. [Det består i følge Storybook av](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)

- komponenter
- design tokens
- dokumentasjon.

Man kan også se totalen av designets spesifikasjon i figma og designsystemet som et designsystem, og et designsystem vil i alle tilfeller ofte bygge på et design(system) i nettopp Figma. Som vanlig er språket ikke uten sine dobbeltbetydninger og usikkerheter. I denne bloggen er et designsystem herfra og ut brukt for å beskrive ca det som Storybook definerer et designsystem som. I tilfellet for Aksel fra NAV og Designsystemet fra Digdir, brukes det om det totale systemet, selv om det også er upresist på alle slags måter. Men jaja, det bør være tålelig forståelig utifra konteksten.

### Prosessen

Jeg begynte med å sette opp mitt eget system uten å tenke noe særlig på hva som er lurt og hva som er skikkelig dumt. Med hjelp av min foretrukne språkmotor kom det opp fort og gæli, og er i dag ute som et konsept-system på NPM. Resultatet ble yadsy (yet another design system), som kan sjekkes opp [her](https://github.com/johanmha/yadsy).

Deretter undersøkt jeg norske state-of-the-art designsystemer fra [NAV](https://main--66b4b3beb91603ed0ab5c45e.chromatic.com/?path=/docs/docs-getting-started--docs) og [Digdir](https://www.designsystemet.no/). Jeg har dykket ned i dokumentasjon og kode for å forstå hvilke valg de har tatt, hva de har gjort, og hva de ikke har gjort.

Med basis i mitt eget enkle system, har jeg dermed kunnet se hva du får når du tenker og grubler på arkitekturen, heller enn å bare kaste noe på veggen og ser hva som skjer.

## Hva er poenget med et designsystem?

Det er i hovedsak to behov et designsystem dekker:

1. Det skal spare tid
2. Det skal sikre konsistent og god brukeropplevelse.

I tillegg kan man argumentere for at et hovedpunkt er å sikre overholdelse av krav og regelverk (les: WCAG/universell utforming), men jeg tenker dette sklir inn under punktene over.

Derfor skal vi i de kommende seksjonene se på hvilke metoder og valg som er gjort for å oppnå nettopp dette.

## Hvert sekund teller

Først ser vi på punkt nummer 1: hvordan et designsystem kan spare tid.

### Dokumentasjon

Tydelig dokumentasjon er essensielt for bred adopsjon. Det må være enkelt å forstå hvordan man bruker komponenter, styler dem, setter opp temaer, osv., ellers lager man dem heller selv. Dette fungerer heller ikke:

![I am the documentation](../bilder/iamdocumentation.jpg)

Her kommer [Storybook](https://storybook.js.org/) inn. Gjennom [stories](https://storybook.js.org/docs/writing-stories) kan du vise frem til utvikleren hvordan en komponent skal brukes, og settes opp eksempler på ulike scenarioer. Jeg liker særlig godt hvordan Designsystemet har laget en egen docs for hver enkelt komponent, som gir en overordnet historie om hvordan den skal brukes. Dette er lettlest og forståelig, og samler mye kunnskap på én side. [Her, eksempelvis fra knappen deres](https://storybook.designsystemet.no/?path=/docs/komponenter-button--docs).

Det er også naturlig å legge inn overordnet dokumentasjon om saker som bruk og beste praksiser i Storybook. Her har dog både Nav og Digdir tatt det et steg lenger, og laget sine egne web-sider med et stort økosystem av dokumentasjon. Hos [Designsystemet](https://www.designsystemet.no) finner du kom-i-gang-informasjon for både [designere](https://www.designsystemet.no/grunnleggende/for-designere/kom-i-gang), og [utviklere](https://www.designsystemet.no/grunnleggende/for-designere/kom-i-gang), samt [god praksis](https://www.designsystemet.no/god-praksis). Nav er ikke noe dårligere og har blant annet sin [blogg](https://aksel.nav.no/produktbloggen) med erfaringer, kunnskap og oppdateringer.

Det er ingen overdrivelse å si at Designsystemet og Aksel tar sin dokumentasjon alvorlig, og det er nok et hint om viktigheten av den.

### Gjennbrukbart og konfigurerbart

For å kunne dekke behovet for å spare tid i utviklingen, må det også faktisk brukes i utviklingen. Da må det være brukbart på tvers av mange ulike team, med mange ulike behov og spesialtilfeller, og med mange utviklere som skal ha en god utvikleropplevelse. For at det skal være mulig må du ha et par ting:

- Gjenbrukbarhet
- Konigurerbarhet

Under dette må man blant annet finne balansen mellom å være generell og å være spesiell. Her har for eksempel Aksel funnet en fin balanse når de har laget et standardisert sett med breakpoints til responsive design. De har også utviklet en egen type som kan ta inn ulike design tokens basert på hvilken skjermbredde man er på. På den måten sikrer man at man har et felles system å jobbe etter, samtidig som det er ganske mye spillerom for hvert enkelt team. Hvis noen absolutt må ha noe utenfor dette settet, så kan man alltids lage sitt eget breakpoint med sin egne regler. På denne måten er det både gjenbrukbart rett ut av boksen, samtidig som det ikke blokkerer for spesielle konfigureringer.

Et annet eksempel på å gjøre komponenter konfigurerbare er polymorfi. Hva er det? Kort fortalt at du kan endre hvilket html-element en komponent rendres ut som. Det klassiske eksempelet er å bruke en Button-komponent som en lenke, fordi du vil bruke noe som ser ut som en knapp til å navigere til en ny side. Det bedrer universell utforming, ettersom en href er semantisk korrekt element for oppgaven. Det kunne for eksempel vært slik

```jsx
<Button as="a" href="/kontakt-oss" variant="primary">
  Kontakt oss
</Button>
```

i stedet for slik

```jsx
<Button onClick={() => (window.location.href = '/kontakt-oss')} variant="primary">
  Kontakt oss
</Button>
```

Designsystemet støtter dette med [asChild](https://www.designsystemet.no/grunnleggende/for-utviklere/komposisjon) gjennom [Radix sin Slot-komponent](https://www.radix-ui.com/primitives/docs/utilities/slot), mens Aksel gjør det med sin egen [OverridableComponent](https://aksel.nav.no/grunnleggende/kode/overridablecomponent). Felles for de begge er at de sikrer typesikkerhet for komponenten, i motsetning til hva du får med enklere implementasjoner.

Som et siste notis, er det å finne balansen på dette feltet antakelig det aller vanskeligste i et designsystem. Blir det for generelt er det ikke brukbart. Blir det fort spesielt blir det kaos både å bruke og vedlikeholde. Blir det for konfigurerbart risikerer du at utviklere gjør ting de ikke burde, og ødelegger opplevelsen av _et_ budskap fra _én_ avsender. Det er her håndverk og erfaring virkelig kommer til sin rett.

### Gode hjelpere

Si noe om støtteverktøyene som er inkludert i Designsystemet og Aksel

- CLI
- linting (lint/style-lint)
- temabygger

Si noe om typescript og hvordan det hjelper utviklerne som bruker systemet

- forlengelse av typene til grunnleggende html-elementer
-

### Så enkelt som mulig å vedlikeholde

Desto mer du har og desto mer komplekst det er, desto mer krever det å vedlikeholde. Et designsystem er ikke et unntak fra denne regelen. En ting er å balansere støtte for konfigurerbarhet og spesialtilfeller opp mot kompleksiteten du får på kjøpet. Et annet moment er å gjøre det enklest mulig å fange feil som introduseres. Da er tester verktøyet. Automatiske enhetstester kan og bør brukes, men også visuelle tester kan ha stor verdi.

Årsaken er at automatiske tester ikke kan fange opp alt som kan gå galt med en komponent i alle sine tilstander. Å ha det som mål ville være både tidkrevende å implementere og i tillegg føre med seg sin egen kompleksitet. [Chromatic](), et mye brukt visuelt testverktøy, baserer seg på snapshots? av eksempelvis en komponents samlede tilstander. Dette blir generert når kode er oppdater, og det sjekkes automatisk om noe er endret. Om noe er endret fra forrige snapshot til dette, varsles mennesket i loopen, og man kan ta stilling til om dette er endring som forventet. Dette er implementert i både

- Tester
  - Enhetstester
  - Visuelle tester (Chromatic)
  - Storybook?

### Lover og regler og universell utforming

Å sette seg inn i og holde seg oppdatert på regler og normer innen universell utforming er tidkrevende. I tillegg er det nok også en ikke ubetydelig andel utviklere som ikke finner det som den mest spennende delen av å utvikle web-sider. Summen blir at universell utforming fort nedprioriteres når de høye herrer svinger pisken og kvartalsmål skal loses i havn. Her har et designsystem en av sine virkelige styrker. I et designsystem kan man løse tilgjengelighetsproblemet én gang, i stedet for én gang i hver app. Det gjør også at du må ha færre utviklere som er virkelige eksperter på feltet.

For universelt utformede komponenter rett ut av designsystem-boksen må man først og fremst sørge for universell utforming på linje med "helt vanlige" komponenter. Dette innebærer ting som gode aria-attributter der de skal være, kontraster (med mindre fargene er opp til brukeren), og visuell indikator på lastetilstand med tilhørende aria-label. Dette ser man eksempler på her i Designsystemet sin [Button-komponent](https://github.com/digdir/designsystemet/blob/next/packages/react/src/components/Button/Button.tsx) for eksempel her

```tsx
<Component
  aria-busy={Boolean(loading) || undefined}
  aria-disabled={Boolean(loading) || undefined}
```

og her

```tsx
{loading === true ? (
  <Spinner aria-hidden='true' />
)
```

Mer avansert implementasjon kan man se i Aksel sin [Button](https://github.com/navikt/aksel/blob/main/%40navikt/core/react/src/button/Button.tsx), hvor det er sikret at en knapp fortsatt kan trykkes på med mellomromstasen selv om den er rendret som et annet html-element. Alt dette er gode eksempler på hvordan et komponentbibliotek kan sikre etterlevelse av lover og regler, og spare tid i samme slengen.

Perfekt tilgjengelige komponenter, løser dog ikke universell utforming alene. I dokumentasjonen i designsystemet kan man gi forslag til verktøy for å kontrollere at man følger gjeldende standard, og i tillegg ha andre tips, triks og retningslinjer for hvordan det bør/skal/må løses. I Aksel har du en betydelig mengde artikler på [god praksis innen universell utforming](https://aksel.nav.no/god-praksis/universell-utforming). Det inkluderer blant annet denne om [navigasjon i skjemaer](https://aksel.nav.no/god-praksis/artikler/navigasjon-i-skjemaer), og denne veldig nyttige om [frontend-kode og tilgjengelighet](https://aksel.nav.no/god-praksis/artikler/utvikling).

## God brukeropplevelse er kongen

Så over til punk 2: Hvordan kan et designsystem bidra til god brukeropplevelse?

### _Et_ gjennomtenkt design

God UX er vanskelig. Å gjøre noe vanskelig flere ganger gjør antakelig resultatet

- dårligere
- treigere (å lage, vedlikeholde og videreutvikle)

og det blir dobbeltarbeid. Da gir det mening å i stedet fikse problemet én gang. Når det er sagt, hvert grensesnitt lever sitt eget liv, og noe må alltids gjøres på nytt hver gang. Men, med gode basekomponenter og designtokens, designet for at alle brukere intuitivt skal kunne sanse og forstå, har man et godt utgangspunkt. Når man i tillegg har noen grunnlayouts for ulike grensesnitt, har man gjort en god jobb for å unngå dobbeltarbeid, sikre brukeropplevelse, og spare på energien til de UX-designerne man har til rådighet.

### Universell utforming på nytt

Universell utforming er åpenbart også god brukeropplevelse. Gjennom et designsystem kan man sikre implementasjonen som diskutert [over her](#lover-og-regler-og-universell-utforming).

### Felles avsender

Noe føles rart når man fra den samme avsenderen får store eller små ulikheter i brukeropplevelsen.

![somethings wrong](../bilder/somethingswrong2.png)

Og da er et designsystem fint å ha, ettersom det gir deg grunnelementene ferdig ut av boksen, og dette gir deg langt på vei en grunnleggende følelse. Da jeg selv startet som frontender, tilbake i 2017, var mitt første prosjekt basert på bootstrap. Det tok ikke lang tid før jeg innså at et mistenkelig antall web-sider så ut som min egen.

At alle bruker de samme komponentene og tokenene sikrer dog ikke alene at følelsen blir lik på tvers av en organisasjon. Utviklere kan overskrive css-variabler, endre komponenter sine forhåndsdefinerte verdier, bruke kompontentene på utilsiktede måter, og sikkert tulle og tøyse på et hav andre måter. Derfor er systemer for å sikre korrekt bruk en viktig brikke i et designsystem.

Det første verktøyet er dokumentasjon. Fortell utviklerne hvor og hvordan designsystemet skal brukes og du har rydda unna en del rot før det oppstår. Men ikke alle leser dokumentasjon, og enda færre følger den, så hardere lut må til. Man kan for eksempel bygge et kommandolinjeverktøy. Det kan du deretter bruke til å sørge for at css blir importert på riktig vis, med layers i riktig rekkefølge, slik at du faktisk får rett styling på rett sted. Det har [Aksel gjort](https://aksel.nav.no/grunnleggende/kode/css-import).

Et annet verktøy er [style-lint](https://stylelint.io/). Her har [Nav gjort noen smarte triks](https://aksel.nav.no/grunnleggende/kode/stylelint) som for eksempel å advare om du prøver å endre globale design tokens fra Aksel og om ekstern bruk av en komponents interne design tokens. På denne måten oppfordrer man ikke bare gjennom dokumentasjon, man håndhever gjennom kode. Det gir så klart bedre etterlevelse, den gang røde linjer eller blokkerte commiter er vanskeligere å glemme eller overse enn beste praksiser.

![Ah ah ah!](../bilder/ahahah.gif)

Andre smarte ting som kan nevnes er layout primitives, hvor eksempelvis [page-komponenten](https://aksel.nav.no/komponenter/primitives/page) til Aksel gir deg grunnlaget for en web-side ut av boksen. Man er fortsatt avhengig av at utvikleren gjør de riktige konfigurasjonene, men med layouten og tilhørende dokumentasjon har du gjort jobben veldig mye enklere.

## Konklusjon

Oppsummert virker det som det er de mange små valgene som gjør et godt designsystem godt. De små tingene som sørger for at utviklere kan bruke ting rett ut av boksen, konfigurere, utvide, skape litt mer, tenke litt mindre (eller kanskje heller tenke litt mer på det som gir verdi), gjøre litt mer av det morsomme og gjøre litt mindre av det kjedelige. Resultatet om man gjør det riktig, blir at alle i en organisasjon faktisk kan bruke det samme systemet. Tilbake får du et konsistent design, åpenbart fra én avsender som er intuitivt å bruke og ikke minst tilgjengelig for alle. Og du sparer tid på veien.

Men som enkeltperson da - er det noe vits å lage sitt eget designsystem? Vel, det vil gi deg et konsistent uttrykk på web-sidene dine (om du lager den slags på fritiden), og du slipper å implementere tidkrevende ting som universell utforming på nytt hver gang (om du bryr deg om den slags). Du får også generelle komponenter rett ut av din egen boks, og kan spare tid på den måten. I tillegg har vi jo alle opplevd at vi gjerne skulle ha dokumentert vår egen kode bedre, både for å forstå valgene, men også noen ganger bare for å forstå. Det oppfordrer et designsystem deg til å lage.

Det korteste veien til mål er nok likevel å bare bruke et av de store komponentbibliotekene som [Chakra UI](https://www.chakra-ui.com/), eller til og med [Designsystemet](https://github.com/digdir/designsystemet#table-of-contents) til Digdir, som er helt åpent tilgjengelig. Resultatet blir kanskje masseprodusert av utseende, men bryr den generelle brukeren seg noe særlig om det? Neppe. Du kan faktisk også bygge ditt eget designsystem på toppen av dem. Det er jo litt kult.

Så det som taler for å lage ditt eget designsystem (yet another yadsy aka yayadsy), er nok mest av alt innsikten du får på veien.

![friends along the way](../bilder/friendsalongtheway.gif)

Også er det jo gøy da.
