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

"Er ni taggad"? Spørsmålet, "er dere gira", kom fra en av våre svenske servitører i entreen til Frantzén, Stockholms éne trestjerners restaurant. Og svaret var ja. Ja, vi var så definitivt taggad! Og med god grunn; det var restaurantopplevelse mange hakk over det flere hadde opplevd før. Fra vannliljene i gangen, til belysning og Red Hot Chillipeppers i heisen, til Champagne og amuse-bouche i forværelset, hvor vi også fikk en tour av alle hovedinngrediensene framme hos kokkene. De andre Systekerne kunne i tillegg humre over dagens mest pinsamme situasjon, når Johan blandet sammen to av servitørene. Han reddet seg inn med litt lett rødmende stotring i etterkant, til mer glede for resten av gjengen.

Deretter en omvisning av arbeidskjøkkenet og vinkjelleren, fylt med akkurat så eksklusiv vin som du skulle forvente, inn til spisesalen fylt med kokker, rolige som skjærer på tunet, i et nydelig rent og pent kjøkken, med gjestene spredd rundt dem. Så til en fantastisk meny, til god vin, til god pairing av vinen til maten, til den åpenbart ikke innøvde vinkunnskapen, ettertestet med noen bonusspørsmål fra gruppas vinnørd, som sommelierene virket å ha stor glede i å besvare presist og uten nøling. Kan kjenne jeg blir glad og nesten litt rørt her jeg gjenopplever det gjennom skrivinga. Et øyeblikk som stakk seg særlig ut var da vi seks gjestene, ble servert av seks servitører, og fikk seks perfekte retter perfekt koordinert foran oss. Du kunne føle Vivaldi i bakhodet, og opplevelsen av å være en del av en episode Chefs Table. Kult.

Til slutt tilbake opp i forværelset, til våre behagelige og tilbakelente sitteplasser, til en helt utrolig petit four, som Daniel spøkefult men super seriøst påpekte var mer av en grand huit, og til slutt til en hinnsides regning som presset kredittkortgrensa til Karl, men likefullt ble betalt med stor glede etter at han og Hans Ole hviskende i hjørnet hadde kommet frem til et passende tips-nivå.

Kvelden ble sedvanlig avsluttet på Karaoke-bar, hvor Siri som vanlig briljerte med alt hun tok i, og Erling gledet resten av oss med noen spesielt kreative sangvalg. Psycho Killer av Talking Heads lever stadig leiefritt i hodet mitt. En fa fa fa fa, fa fa fa fa fa, far better kveld enn man kanskje har noen rett til å ha.

## Dag 2

Med betydelig underskudd på søvn men upåklagelig mot, møtte vi opp til dag to av konferansen, for det som var den sterkeste dagen faglig.

### Back to the future: of web development - Una Kravets (Google Chrome)

Hva kan du gjøre med moderne HTML og CSS? Veldig mye kult viser det seg! Såpass mye at flere i gruppa følte på at de måtte hjem og skrive om appene sine. Alt fra avanserte karuseller til lagdelte layouts (les: popover), super-snappy, og helt uten JavaScript. Kanskje ironisk på en JS-conf, men å begrense bruken er også god bruk. Om du ikke er overbevist, her er noen gode argumenter til hvorfor:

1. Det separerer logikk og styling
2. Det redusere tredjeparts-avhengigheter
3. Det reduserer vedlikehold
4. Det gjør tilgjengelighet enklere
5. Det forbedrer ytelse

Så du kan bygge kjappere og gjøre livet enklere. Se ikke bort i fra at dette blir et tema å velge i for neste runde med faggrupper.

### Shipping Node.js packages in 2025 - Joyee Cheung (Compilers team at Igalia, Node.js TSC member and V8 commiter)

Vi er i 2025, men fortsatt shippes 60% av essensielle npm-pakker som Common JS, mot bare 10% som ES Modules. De resterende 30 prosentene shipper begge. Hvorfor? Flere grunner, blant annet at man ikke vil miste kompatibilitet, og dermed rekkevidde og bruk. Så da ender 30% opp med å støtte begge deler, noe som øker både kompleksitet og pakkestørrelse. Dermed har npm-pakkene dine som i utgangspunktet hadde mer masse en en neutronstjerne, nå doblet seg fra det igjen.

- **node modules size meme**

Det mest interessante er at dette faktisk ofte kan fikses enkelt. Den store hemmeligheten er at man kan require' esm(!?!).Folk misset bare memoet, og det gjorde kanskje også LLM'ene der ute? Kort oppsummert må du for å gå over fra dobbel shipping til bare esm:

- Droppe top level awaits
- Passe på å bruke extensions (typ: .js) i eksportene dine
- Sette opp esm-shipping i package.json

Du kan finne hele oppskriften og alt av detaljer i slidesettet [her](https://github.com/joyeecheung/talks/blob/master/nordic_js_2025/shipping-nodejs-packages-in-2025.pdf).

Karl fikset forøvrig et par av sine pakker i løpet av de første dagene etter konferansen. High IQ move.

### Pausetanker

Dag to starter med to fagfokuserte foredrag. Det første er ypperste klasse av fremføring med et tema som også er lett og kult å demoe. Det andre er tungt og dypt, men tydelig og klart fremført med god og ryddig engelsk. Meg med flere datt kanskje litt ut og inn mot slutten, men gi meg heller mer av dét enn temaer plukket fra hype-toget. Rant over.

### Yet Another Config File: introducing node.config.json - Marco Ippolito (Senior Security Engineer at HeroDevs, Node.js TSC member and TC39 delegate)

Har du opplevd at skriptene i package blir overfylt av config-flag? Det er du i så fall ikke alene om, og med native features some test runner, watch mode og native typescript i node, er det ikke rart. Enter Node Config. Kort fortalt akkurat det det høres ut som: en config fil for å konfigurere node. En god og instruktiv prat om noe som kun kan bli en oppgradering (svært personlig mening).

FAQ:

- Gjør det oppstart av appen min tregere? Ja. I praksis: nei
- Hvorfor json? Fordi det gir mening med javascript
- Bør jeg publisere node.config.json-filen min? Nei
- Er node.config produksjonsklar? Du kan bruke den, men breaking changes vil/kan komme
- Kan jeg legge til custom konfigurasjon i den? Ja, men den vil ikke bli lest.

Bonus: noen morsomme memes fra foredraget.

- **morsom meme :the office - dwight sush**

- **morsom meme: batmanaktig gul dude som ser på bilde av noe**

### Badstuepause

De hadde satt opp portable badstuer på området, så deler av gruppa sneik seg ut for badstue og bading i skjærgården under det neste foredraget.

- **bilde av badstuefolk**

### Past Time for Passkeys - Kyle Simpson (Creator of the "You Don't Know JS" book series)

Konferansens superstjerne blir jeg fortalt av Erling og Karl mens vi tar en pils på togstasjonen før avgang. Han operer i alle fall som en ringrev i game'et med stor trygghet og bra med humor. Han starter med å hamrer at

- Passord er for noobs
- Det er enda mer noobete med passkoder eller magiske lenker på sms og epost
- Passord resets er dårlig
- Sikkerhetsspørsmål er forferdelig
- SSO er dårlig
- Captchas er dårlig
- Kort sagt er alt av standard inloggingsteknologi dårlig

Og dårlig er både dårlig UX og dårlig sikkerhet. Det som derimot er helt konge er biometrisk innlogging. Det lagres trygt lokalt og funker trygt og ikke minst brukervennlig. Passkeys er noe så enkelt som biometrisk innlogging for web-apper, så du har en ting å gjøre, hvilket er å ta det i asap.

For å være litt mer balansert, presenterer han etter hvert noen fordeler og ulemper også:

positive sider:

- Passkeys er mer private
- Passkeys er sikrere
- Det er godt kjent for brukeren (selv om navnet kan være dårlig/ukjent)
- UX er mye mer strømlinjeformet

negative sider:

- Brukeropplæring (både lære å stole på og å bruke)
- Brukerens byrde med oppsett
- Brukerens ansvar å bruke riktig (f.eks. å ikke bare ha det på én enhet)
- Fortsatt under utvikling

Noen fine ressurser på temaet:

- passkeys.com
- passkeys playground
- passkey garden

### Lightning talks

Lightning talks er ikke mitt favorittkonsept. Mest av alt fordi det er lite verifisering av kvalitet, og jeg blir lett pinlig berørt av manglende kvalitet på scenen. Det beste med lightning talks er sånn sett at smerten er kjapt over. Kvaliteten på foredragene var dog tålelig gode, med bra pace og generelt god engelsk og ikke for mange, lange, vonde forsøk på å bryte tidsrammene. Kult av de som tar sjansen også.

Spesielt omdiskutert var hun som snakket om fugletitting (bare kalt birding i miljøet). Det var en passe påtatt, tørrvittig oppfordring om å være mer med naturen og bli mindre deprimert. Det var svært delte meninger om hvorvidt det er greit å snakke om fugletitting på en tech-konferanse, hvor det ble hyllet av enkelt på internettet, mens vår egen Daniel Eriksson mente det var et hån mot konseptet JavaScript-konferanse.

### Codemods in the Era of AI - Maja Wichrowska (Member of Technical Staff at OpenAI working with ChatGPT Client Infrastructure)

Case: noe endrer seg i et rammeverk og du må skrive om hele kodebasen. Hva gjør du?

1. Ingenting
2. Lager en eslint-regel
3. Starter et 6 måneder lang prosjekt med buy in fra ledelsen
4. Ber AI om å gjøre det
5. Skriver en code mod

Maja, med konferansens mest utfordrende etternavn for konferansierene, snakket litt om kombinasjonen av 4 og 5.

Utfordringa. Når man ikke vet hvordan AI tenker, kan det føles risikofylt å slippe den løs på en stor kodeendring der du ikke kan verifisere alle linjer. Derfor kan du i stedet bruke codemods:

1. Gjør migrasjonen manuelt et par ganger
2. Lag en steg-for-steg-algoritme
3. Skaler algoritmen med verktøyene du har

Så bruk AI til å skrive code mods, som kan testes og verifiseres, og bruk så dem trygt på de 90 prosentene av kodebasen som er enkel og grei.

### Word art

Se for deg Kristen Wiig, med tysk aksent, og stort engasjement for font art fra 90-tallet, så har du et greit bilde av vårt siste foredrag.

![Energien, språket og faktene til siste foredragsholder matchet godt med Kristen Wiig ](../bilder/kristenwiig.gif)

Det var på ekte morsomt, tøysete, ganske meningsløst og veldig morsomt. Hun prater med en tidvis hviskende, insinuerende stil, som om vi gjør noe litt ulovlig, og guider oss stødig gjennom hvordan man kan lage de festligste fonter til weben. Hun fikk publikum til å ta bølgen, sammen med bølgene i den ene fonten, med følelsen av at salen faktisk likte å være med på det. Det siste vi tar med oss hjem fra konferanse er den gyldne regel innen font art:

> Aldri bruk bare én effekt

## Til slutt

Vi avslutter dagen med å finne oss et bord i høyden, og er veldig fornøyde med å ha fått til det. Til slutt gir vi opp superplassen vår for Karaoke, før halve gruppa danser litt til DJ'en, hele gruppa gjør litt origami, og vi til slutt drar hjem til svært anstendig tid. Erling får akkurat plass på flyet, vi kommer oss hjem gjennom Amy, og vi ser frem til neste Nordic JS.
