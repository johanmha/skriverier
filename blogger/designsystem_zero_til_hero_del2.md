---
title: Designsystem - fra zero til hero - brukeropplevelse
date: 2025-03-17
published:
---

# Designsystem - fra zero til hero - brukeropplevelse

I første del av bloggserien påstod vi at det i hovedsak er to behov et designsystem dekker:

1. Det skal spare tid
2. Det skal sikre konsistent og god brukeropplevelse.

Første del med introduksjon og tidssparing finner du [her](./designsystem_zero_til_hero_del1.md).

## God brukeropplevelse er kongen

Nå over til punkt 2: Hvordan kan et designsystem bidra til god brukeropplevelse.

### _Et_ gjennomtenkt design

God UX er vanskelig. Å gjøre noe vanskelig flere ganger gjør antakelig resultatet

- dårligere
- treigere (å lage, vedlikeholde og videreutvikle)

og det blir dobbeltarbeid. Da gir det mening å i stedet fikse problemet én gang. Med gode komponenter og designtokens, designet tilgjengelige, har man et godt utgangspunkt. Har man i tillegg noen [layout primitives](https://aksel.nav.no/grunnleggende/kode/layout-primitives) for ulike grensesnitt, har man gjort en god jobb for å sikre brukeropplevelse, unngå dobbeltarbeid, og spare på energien til UX-designerne i samme slengen.

Når det er sagt, hvert grensesnitt lever sitt eget liv, og noe må alltids gjøres på nytt hver gang.

### Lover og regler og universell utforming

Universell utforming er åpenbart også god brukeropplevelse, men å holde seg oppdatert på lover og regler innen universell utforming er tidkrevende. I tillegg er det nok også en andel utviklere som ikke finner det så spennende. Summen blir at universell utforming fort nedprioriteres når de høye herrer svinger pisken og kvartalsmål skal loses i havn. Her har et designsystem en av sine virkelige styrker. I et designsystem kan man løse (deler av) tilgjengelighetsproblemet én gang, i stedet for én gang i hver app. Det gjør også at du må ha færre utviklere som er virkelige eksperter på feltet.

For universelt utformede komponenter rett ut av designsystem-boksen må man sørge for universell utforming på linje med "helt vanlige" komponenter. Dette innebærer ting som gode aria-attributter der de skal være, kontraster (med mindre fargene er opp til brukeren), og visuell indikator på lastetilstand. Dette ser man eksempler på i Designsystemet sin [Button-komponent](https://github.com/digdir/designsystemet/blob/next/packages/react/src/components/Button/Button.tsx) her

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

Mer avansert implementasjon kan man se i Aksel sin [Button](https://github.com/navikt/aksel/blob/main/@navikt/core/react/src/button/Button.tsx#L98), hvor det er sikret at en knapp fortsatt kan trykkes på med mellomromstasten selv om den er rendret som et annet html-element. Alt dette er gode eksempler på hvordan et komponentbibliotek kan sikre etterlevelse av lover og regler, og spare tid i samme slengen.

Perfekt tilgjengelige komponenter løser dog ikke universell utforming alene. I dokumentasjonen til et designsystem kan man gi forslag til verktøy for å kontrollere at man følger gjeldende standard, og i tillegg ha andre tips, triks og retningslinjer for hvordan det bør/skal/må løses. I Aksel har du en betydelig mengde artikler på [god praksis innen universell utforming](https://aksel.nav.no/god-praksis/universell-utforming). Det inkluderer blant annet denne om [navigasjon i skjemaer](https://aksel.nav.no/god-praksis/artikler/navigasjon-i-skjemaer), og denne veldig nyttige om [frontend-kode og tilgjengelighet](https://aksel.nav.no/god-praksis/artikler/utvikling).

![Utilgjengelig](../bilder/utilgjengelig.gif)

Det er kjedelig når ting ikke er tilgjengelig ☝️

### Felles avsender

Noe føles rart når man fra én avsender får store eller små ulikheter i brukeropplevelsen.

![somethings wrong](../bilder/somethingswrong2.png)

Da er et designsystem fint å ha, ettersom det gir deg grunnelementene ferdig ut av boksen, og dette gir deg mye når det kommer til felles avsender. Da jeg selv startet som frontender tilbake i 2017, var mitt første prosjekt basert på bootstrap. Det tok ikke lang tid før jeg innså at et mistenkelig antall web-sider så ut som min egen. Det er kraften på godt og vondt av et designsystem eller komponentbibliotek.

At alle bruker de samme komponentene og tokenene sikrer dog ikke alene at følelsen blir lik på tvers av en organisasjon. Utviklere kan overskrive css-variabler, endre komponenter sine forhåndsdefinerte verdier, bruke komponentene på utilsiktede måter, og sikkert tulle og tøyse på et hav andre måter. Derfor er systemer for å sikre korrekt bruk en viktig brikke i et designsystem.

Det første verktøyet er dokumentasjon. Fortell utviklerne hvor og hvordan designsystemet skal brukes og du har rydda unna en del rot før det oppstår. Men ikke alle leser dokumentasjon, og enda færre følger den, så hardere lut må til. Man kan for eksempel bygge et kommandolinjeverktøy. Det kan du deretter bruke til å sørge for at css blir importert på riktig vis, med layers i riktig rekkefølge, slik at du faktisk får rett styling på rett sted. Det har [Aksel gjort](https://aksel.nav.no/grunnleggende/kode/css-import).

Et annet verktøy er [style-lint](https://stylelint.io/). Her har [Nav gjort noen smarte triks](https://aksel.nav.no/grunnleggende/kode/stylelint) som for eksempel å advare om du prøver å endre globale design tokens fra Aksel. På denne måten oppfordrer man ikke bare gjennom dokumentasjon, man håndhever gjennom kode. Det gir så klart bedre etterlevelse, den gang røde linjer eller blokkerte commiter er vanskeligere å glemme eller overse enn beste praksiser.

![Ah ah ah!](../bilder/ahahah.gif)

Andre smarte ting som kan nevnes er layout primitives, hvor eksempelvis [page-komponenten](https://aksel.nav.no/komponenter/primitives/page) til Aksel gir deg grunnlaget for en side ut av boksen. Man er fortsatt avhengig av at utvikleren gjør de riktige konfigurasjonene, men med layouten og tilhørende dokumentasjon har man gjort jobben veldig mye enklere.

## Konklusjon

Oppsummert virker det som det er mange små valg og verktøy som gjør et godt designsystem godt. Små ting som sørger for at utviklere kan bruke ting rett ut av boksen, konfigurere, utvide, skape litt mer, gjøre litt mer av det morsomme, og gjøre litt mindre av det kjedelige. Resultatet, om man gjør det riktig, blir at alle i en organisasjon faktisk kan bruke det samme systemet. Tilbake får du et konsistent design, åpenbart fra én avsender som er intuitivt å bruke og ikke minst tilgjengelig for alle. Og du sparer tid på veien.

Men som enkeltperson da - er det noe vits å lage sitt eget designsystem? Vel, det vil gi deg et konsistent uttrykk på web-sidene dine (om du lager den slags på fritiden), og du slipper å implementere tidkrevende ting som universell utforming på nytt hver gang (om du bryr deg om den slags, noe jeg synes du bør). Du får også generelle komponenter rett ut av din egen boks, og kan spare tid på den måten. I tillegg har vi jo alle opplevd at vi gjerne skulle ha dokumentert vår egen kode bedre, både for å forstå valgene, men også noen ganger bare for å forstå. Det oppfordrer et designsystem deg til å gjøre.

Den korteste veien til mål er nok likevel å bare bruke et av de store komponentbibliotekene som [Chakra UI](https://www.chakra-ui.com/), eller til og med [Designsystemet](https://github.com/digdir/designsystemet#table-of-contents) til Digdir, som er helt åpent tilgjengelig. Resultatet blir kanskje masseprodusert av utseende, men bryr den generelle brukeren seg noe særlig om det? Neppe. Du kan faktisk også bygge ditt eget designsystem på toppen av dem. Det er jo litt kult.

Så det som taler for å lage ditt eget designsystem (yet another yadsy aka yayadsy), er nok mest av alt innsikten du får på veien.

![friends along the way](../bilder/friendsalongtheway.gif)

Også er det jo gøy da.
