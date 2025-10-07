---
title: Reisebrev fra Nordic.JS 2025
date: ÅÅÅÅ-MM-DD
published:
---

# Reisebrev fra Nordic.JS 2025

- **bilde av gjengen**

## Vi reiser

Seks stykker var vi som skulle på Nordic.JS 2025, destinasjon Stockholm. Erling, Daniel, Karl og Johan kom i felles firersete på tog. Det var lokket med multiplayer Pico Park på Switch for alle reisende, noe det aldri ble noe av. Karl meldte ellers at han aldri før hadde hatt et tilsvarende høyt alkoholkonsum på tog, uten at noen ble videre imponert av det. Hans Ole mente det eneste man kunne tolke fra uttalelsen var at Karl ikke kunne ha vært på interrail. Nevnte Hans Ole fløy inn fra Oslo Lufthavn, Gardermoen, mens siste deltaker og hundre prosent av kvinneandelen, Siri, kom direkte fra Sicilia. Kan nevnes at hun var i Budapest da vi organiserte turen (mrs. world wide).

En bra gjeng hadde gått inn for landing, og vi var klare for fag, og litt hygge attåt.

## Dag 1

Vi kommer oss opp etter litt for lite søvn, spiser frokost, og tar en bitteliten maxitaxi til Pier 9. Etter å ha sjekket inn er vi klar for åpning.

- **bilde fra taxituren**

Årets verter er hyggelige og passe kleine, med innøvde, passe dårlige utvikler-jokes. Det informeres om nødutganger, tidsskjema og om hva som skjer når du går over tiden som foredragsholder: klassisk musikk (hvilken?) begynner først subtilt før det blir høyere og til slutt veldig høyt. Da er det på tide å komme seg av. Til undertegnedes store glede var det heldigvis ikke noen trakk strikken unødig langt.

Ellers er det er badstue utenfor, vertene har grønne jakker og vi er klare til å komme i gang. Fine ting.

## Foredragene

### The Time traveler's guide to web technologies

Hvem: Phil Hawksworth
Jobber med: Head of Developer Relations at Deno

Etter en kort intro om hvor vanskelig det er å velge musikk å entre scenen til, setter han i gang med en historisk oversikt over JavaScripts utvikling. Hovedpoenget hans virker å være at det strengt tatt ikke er JavaScripts™ men ECMAScripts historie. Dette får han frem med små slengere i retning Oracle hvor de passer inn. Hovedbudskapet som jeg mistenker han skulle komme med på slutten blir litt spist opp av at han går godt over tiden, får dagens første du-er-over-tiden-musikk, og må rushe de siste slidene. Synd, siden det jo er et godt poeng. Anbefaler å sjekke opp Deno's kamp mot Goliat (Oracle) [her](). Kort oppsummert vil de ugyldiggjøre Oracle sitt eierskap til JavaScript på vegne av oss alle, slik at det kunne hett Nordic JavaScript conf og at vi bare kunne droppet hele ECMAScript-navnet. Du kan støtte den juridiske prosessen [her]()

- **I am doing my part gif**

Utenom det får han frem at javascript har vokst mye etter at den første versjonen ble skrudd sammen på 10 dager tilbake i 1995. Noen minneverdige punkter:

- 2001: JSON
- 2006: JQuery. Med visjonen om at det skal være morsomt å skrive JavaScript. Nå får tiden ler vi jo stort av og ikke med JQuery, som kanskje kan være litt historieløst
- 2007: IPhone, med touchskjerm og er med det starten på en haug av nye flater JavaScript lever i og må tilpasses til
- 2009: Node. JavaScript treffer serveren til folks glede og sorg
- 2014: AWS Lambda. JavaScript blir serverløst og akselerer videre på hastigheten inn i alle deler av ditt digitale liv

Og resten er historie som de sier.

### What's up in ES2027

Hvem: Christophe Porteneuve
Jobber med: Web dev siden 1995 og senior staff engineer at Doctolib

Etter litt historie var det nå tid for å se fremover. Christophe minner oss først på at [ECMAScript er standarden JavaScript er basert på](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript) og at man må hive seg på kampen mot Oracle. Deretter litt om den omstendelige prosessen med å få noe nytt godkjent inn i standarden, hvorav man blant annet må få det implementert to steder som V8 og Firefox.

Av nevneverdige forslag som ligger i pipeline (finn norsk ord) finner vi blant annet [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal), eller native tid- og dato-håndtering. Det blir forhåpentligvis slutten for mange tredjeparts-biblioteker som date-fns, når det endelig blir godkjent. Gleder meg. [Her](https://github.com/tc39/proposals) er forresten alle proposals som er og har vært.

### Fika sposored by...

Å få sponset kaffepausene er penger man ikke kan si nei til, men det føyer seg like fullt inn i rekken av Lexus pause-prater og SnapDragon Old Trafforder, som jeg ikke er noen stor fan av. Jaja. Gode kanelboller var det i alle fall selv om Daniel syntes de var litt vel klissete, noe det var vanskelig å være uenig i. I-landsproblemer der altså.

### Look ma, no hands! Multimodal AI-Agents in the browser

Hvem: Nico Martin
Jobber med: Machine learning engineer at Hugging Face

Først ut av en uunngåelig andel KI-baserte talks. Her viste han at man lage egne KI-agenter basert på små LLM'er, og kjøre dem i browseren. Tingene å ta med seg hjem var:

- [Tool calling](https://medium.com/garantibbva-teknoloji/understanding-llm-tool-calling-traditional-vs-embedded-approaches-fc7e576d05de) er et kraftig verktøy
- Browseren kan gjøre mer enn du tror
- Du må ikke alltid bruke de største modellene
- Det er enkelt å teste. Gjør det!
- Live demo er ganske modig, selv om pratende KIer kanskje ikke er like imponerende i 2025 som i 2017
- Demoen slo best an når den faktisk feilet. Moro og instruktivt.

Han var også den første til å komme seg i land på tid, noe som bør feires som en liten win.

### Writing an emulator in JavaScript?

Hvem: Sara Vieira
Jobber med: Product engineer hos epilot og forfatter av The Opinionated Guide to React

En prat som var mer som en kuriositet å regne, noe hun forsåvidt var tidlig ute med å innrømme selv. Jeg tar med meg hjem påminnelsen om at man kan gjøre bitwise operasjoner i JavaScript, at man ikke burde skrive en emulator i JavaScript og at hvis man likevel ønsker å gjøre det, så er den store oppgaven å gjenskape alle mulige slags spilleventer én for én.

Kan også nevne at hun dro én vits som fløy rett over hodet på meg og de fleste andre (basert på latternivået), og én som fikk dagens så langt beste mottakelse: "I work with JavaScript and sometimes I want to say f\*\*\* this, but i dont know what this is." Det er faktisk også lovlig å lage emulatorer, men prøver du deg på noe med Nintendo, så forvent å bli saksøkt uansett.

For den ekstra nysgjerrige finnes koden og presentasjonen hennes (som kode) der ute på [internettet](https://github.com/SaraVieira/making-js-emulator).

### Lunsj

Vegansk diett ble presset på alle. Det var mer populært hos noen enn hos andre, men det er jo sikkert ganske kult for vegetarianerne å ikke være en ettertanke for én gangs skyld. Selv er jeg for, og sier mer av det :+1:. Logistikkmessig en udiskutabel vinn for arrangørene.

### Access-what? why and how. A11y for all

Hvem Geizy "JZ" Domiciano
Jobber med: Engineering Manager hos Rebtel

Web på 90-tallet var ikke tilgjengelig:

- **bilde av utilgjengelig web fra 90-tallet**

Men nå kan den og bør den være det. Kort oppsummert skal alle kunne oppfatte, forstå, navigere, interagere og bidra på nettsider. Pass på at dine nettsider også følger det, for én dag sitter du der og har nedsatt funksjon selv (les: dårlig syn, leddgikt og dårlig hørsel). Du kan finne ut mye [her for eksempel](https://www.uutilsynet.no/regelverk/regelverk-og-krav/746), eller her hos [The A11y Project](https://www.a11yproject.com/posts/). Personlig har det alltid irritert meg hvor lite intuitivt/tilgjengelig det er å skrive A11y, I18n eller k8s, men det er nå meg. Rant over.

### Pause med Palme

Før pausen ble det fra scenen opplyst om at noen har laget en KI-versjon av Olof Palme som skal stille til valg!?! Er det greit? Man kunne visst møte dem i pausene, men jeg fant dem aldri. Fortsatt usikker på om jeg dagdrømte denne biten.

### The Cake Is a Lie... And So Is Your Login’s Accessibility

Hvem: Ramona Schwering
Jobber meda. Developer Advodate hos Auth0

Referansen "the cake is a lie" kommer fra spillet Portal, som kom ut en gang for over 20 år siden.

- **the cake is a lie-bilde**

Spillet er en personlig favoritt, og referansen er alltid godt mottatt, men alle kjenner den nok ikke. Når den ledet inn i en lengre historie/metafor som var rotete gjennomført, ble det til en ganske lang seksjon som neppe var veldig tilgjengelig for de fleste. (Lavthengende ordspill, med lav innsats fra meg der. Beklager.) Hun reddet seg inn i andre halvdel når hun viste med eksempler at login-sider ikke alltid er like tilgjengelige.

Til å ta med seg hjem: skjermlesere må kunne se og gi tilbakemelding på feilmeldinger til brukeren fra skjemavalidering.

### So you've decided to do a technical migration...

Hvem: Sophie Koonin
Jobber med: Web engineering lead og staff engineer hos Monzo Bank

De skulle velge typing for et React-prosjekt. De valge Flow. De valge feil. Det er enkelt å se feilen i ettertid, men var et godt valg i nåtid. Vi alle har gjort det, så spørsmålet er bare: hvordan rydder man opp? Her er noen hovedpunkter fra Sophie på nettopp det, med store refaktoreringer i tankene:

- Gjennomfør PoC på refaktoreringen og dokumenter det
- Når vi er inne på det, dokumenter alt du gjør og hvorfor og alternativene som ble vurdert
- Selg inn hva og hvorfor til stakeholdere
- Lag migreringsscript
- Lag milepæler
- Masse uforutsett vil oppstå
- Ikke forlat ting halvgjort!
- Kjenn risikoen og planlegg for dem
- Uhell skjer
- Feir suksesser og anerkjenn innsatsen til folk

Så et prosjekt som mange andre prosjekter altså.

## Nok fag, mer hygge

På dette tidspunktet var deler av gruppa trøtte og gira på å bli klar til dagens høydepunkt: trestjerners middag på Frantzén :wow-emoji:. Johan og Karl to derfor turen hjem for å sikre tid til både powernap og badstue. Det ble en stor suksess og vi møtte i samlet gruppe opp på trappene til halve gruppas første trestjerners opplevelse, kledelige 5 minutter for tidlig.

## Frantzén

"Er ni taggad"? Spørsmålet kom fra en av våre svenske servitører i entreen til Frantzén, Stockholms éne trestjerners restaurant. Og svaret var ja. Ja, vi var så definitivt taggad! Og med god grunn; det var restaurantopplevelse mange hakk over det jeg selv har opplevd før. Fra vannliljene i gangen, til belysning og Red Hot Chillipeppers i heisen, til Champagne og amuse-bouche i forværelset, hvor vi også fikk en tour av alle hovedinngrediensene framme hos kokkene. De andre Systekerne kunne i tillegg humre over dagens mest pinsamme situasjon, når Johan blandet sammen to av servitørene. Han reddet seg inn med litt lett rødmende stotring i ettertid, til mer glede for resten av gjengen.

Deretter en omvisning av arbeidskjøkkenet og vinkjelleren, fylt med akkurat så eksklusiv vin som du skulle forvente, inn til spisesalen fylt med kokker, rolige som skjærer på tunet, i et nydelig rent og pent kjøkken, med gjestene spredd rundt dem i lokalet. Så til en fantastisk meny, til god vin, til god pairing av vinen til maten, til den åpenbart ikke innøvde vinkunnskapen, ettertestet med noen bonusspørsmål fra gruppas vinnørd, som somelierene virket å ha stor glede i å besvare presist og uten nøling. Kan kjenne jeg blir glad og nesten litt pinlig rørt her jeg gjenopplever det gjennom skrivinga. Et øyeblikk som stakk seg særlig ut var da vi seks gjestene, ble servert av seks servitører, og fikk seks perfekte retter perfekt koordinert foran oss. Du kunne føle Vivaldi i bakhodet, og opplevelsen av å være en del av en episode Chefs Table. Kult.

Til slutt tilbake opp i forværelset, til våre behagelige og tilbakelente sitteplasser, til en helt utrolig petit four, som Daniel spøkefult men super seriøst påpekte var mer av en grande huite og til slutt til en hinnsides regning som presset kredittkortgrensa til Karl, men likefullt betalt med stor glede etter at han og Hans Ole hviskende i hjørnet hadde kommet frem til et passende tips-nivå.

Kvelden ble sedvanlig avsluttet på Karaoke-bar, hvor Siri som vanlig briljerte med alt hun tok i, og Erling gledet resten av oss med noen spesielt kreative sangvalg. Psycho Killer av Talking Heads lever stadig leiefritt i hodet mitt. En fa fa fa fa, fa fa fa fa fa, far better kveld enn man kanskje har noen rett til å ha.
