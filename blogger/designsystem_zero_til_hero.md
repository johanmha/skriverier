---
title: Designsystem - fra zero til hero
date: 2025-03-05
published:
---

# Designsystem - fra zero til hero

Et par disclaimers: jeg var strengt tatt ikke helt ingenting, eller zero, når jeg begynte denne læringsreisen. Jeg har jobbet med og brukt designsystemer tidligere i ulike former og fasonger, men har aldri virkelig gått i dybden på hvilke tanker og valg som inngår i designet av et skikkelig bra designsystem. Om jeg er blitt noen hero er også høyst diskutabelt, men at jeg har fått en brukbar forståelse for do's and dont's' på feltet er ikke å tøye strikken.

Til slutt før vi begynner: hvor ok språkrådet er med at jeg skriver zero til hero på norsk er jeg usikker på, men når Disney kunne gjøre det i sin 1997-klassiker, Herkules, så må det være greit at også jeg gjør det.

## TLDR

Dårlig tid? Ingen lesehest? Hopp rett til [konklusjonen](#konklusjon)

## Introduksjon

### Litt om hva dette ikke er (og er)

Dette er ikke en oppskrift på hvordan man bygger et designsystem. Er du ute etter det, finnes det mange gode inspirasjonskilder der ute, og her er noen av dem:

- [Her](https://storybook.js.org/tutorials/design-systems-for-developers/) har storybook oppsummert veldig mye godt og grunnleggende om hva de mener et designsystem bør være
- [Her](https://main--66b4b3beb91603ed0ab5c45e.chromatic.com/?path=/docs/docs-getting-started--docs) er portalen til Aksel, NAV sin verktøykasse for produktutvikling, som også inkluderer, (og i stor grad _er_ spør du meg), et designsystem.
- [Her](https://github.com/johanmha/yadsy) finner du mitt eget quick and dirty oppsett av et minimalt designsystem, yadsy. Det er et godt utgangspunkt med tanke på struktur og CI/CD.

Det denne bloggposten er, er i stedet en samling betraktninger på hva som gjør et godt designsystem til et godt designsystem.

### Hva snakker vi om her

Ordet designsystem kan strengt tatt brukes om flere ting. I designverden kan det for eksempel være et design satt opp i eksempelvis Figma, som beskriver alt fra de minste bestanddelene som farger og fonter, til grunnkomponenter som knapper og inputfelter, til større sammenstillinger som kort, og hele sider.

Slik sett er det nært beslektet designsystemet vi snakker om i denne bloggposten: komponentbiblioteket brukt i frontend-utvikling. [Det består i følge Storybook av](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)

- komponenter
- design tokens
- dokumentasjon

### Prosessen/Metoden

Jeg begynte med å sette opp mitt eget system uten å tenke noe særlig på hva som er lurt og hva som er skikkelig dumt. Med hjelp av min foretrukne språkmotor kom det opp fort og gæli, og er i dag ute som et konsept-system på NPM. Resultatet ble yadsy (yet another design system), som kan sjekkes opp [her](https://github.com/johanmha/yadsy).

Deretter undersøkt jeg norske state-of-the-art designsystemer fra [NAV](https://main--66b4b3beb91603ed0ab5c45e.chromatic.com/?path=/docs/docs-getting-started--docs) og [Digdir](https://www.designsystemet.no/). Jeg har dykket ned i dokumentasjon og kode for å forstå hvilke valg de har tatt, hva de har gjort, og ikke minst, hva de ikke har gjort.

Det spennende nå blir å se hva du får når du tenker og grubler på arkitekturen, heller enn å bare kaste noe på veggen og se hva som skjer.

## Resultater

### Generelt

La oss rydde det mest åpenbare unna veien først: Når det kommer til kjernen av et designsystem; komponenter og tokens pluss dokumentasjon, har designsystemene _mye_ mer innhold en yadsy. Det er grunnkomponenter for de fleste behov, et stort arsenal av former, farger pluss alt annet av tokens, og også ting som layout primitives, som kan brukes som base for å lage sider med en konsistent utførelse. Dette er kanskje det minst interessante funnet, ettersom det åpenbart er sånn det måtte være. Volum kommer med tid og energi, og nav og digdir har brukt mye mer av begge deler enn det som er puttet i yadsy. Det mer interessant ligger i detaljene.

Det er to ting i kjernen av behovet et designsystem dekker:

- Det skal spare tid i utvikling
- Det skal sikre konsistent og god brukeropplevelse

I tillegg kan man argumentere for at et hovedpunkt er å sikre overholdelse av krav og regelverk (les: WCAG/universell utforming), men jeg tenker dette dekkes av punktene over.

For å kunne dekke disse behovene må systemet kunne brukes på tvers av mange ulike team, med mange ulike behov og spesialtilfeller. For at det igjen skal være mulig må du ha et par ting:

- Gjenbrukbarhet
- Konigurerbarhet

Eller sagt med andre ord, man må finne balansen mellom å være generell og å være spesiell. Det som er fint, er at man egentlig ikke trenger være så veldig spesiell. Her har for eksempel nav funnet en fin balanse når de har laget et ganske bredt sett med breakpoints til responsive design. De har også utviklet en egen type som kan ta inn ulike design tokens basert på hvilken skjermbredde man er på. På den måten sikrer man at man har et felles system å jobbe etter, samtidig som det er ganske mye spillerom for hvert enkelt team. Jeg vil egentlig gå tilbake på min egen påstand om å tilpasse til det spesielle. Det handler heller om å legge til rette for at team og utviklere skal kunne lage sine egne tilpasninger. Hvis systemet legger til rette for dette heller enn å blokkere for det, er man på riktig vei.

Et annet fint eksempel på det, er støtte for "as"(finn et skikkelig navn på dette) i komponenter. Med denne teknologien kan man bruke en knapp som en overskrift (h1), dog akkurat dette eksempelet omfavnes neppe av de som lager regelverk for universell utforming. Si noe om typer og ellers hvorfor dette er bra. Gi noen andre eksempler.

### Litt om struktur

- Forklar strukturen i github
- Generelt mye likt

- CI/CD

### Lover og regler og universell utforming

Å sette seg inn i og holde seg oppdatert på regler og normer innen universell utforming er både tidkrevende. I tillegg er det nok også en ikke ubetydelig andel utviklere som ikke finner det som den mest spennende delen av å utvikle web-sider. Og det er her et designsystem har en av sine virkelige styrker. I et designsystem kan man løse tilgjengelighetsproblemet én gang, i stedet for én gang i hver app. Det gjør også at du må ha færre utviklere som er virkelige eksperter på feltet. Farger og kontraster må likevel hver enkelt utvikler passe på selv. I dokumentasjonen i designsystemet kan man gi forslag til verktøy for å kontrollere at man følger gjeldende standard, og i tillegg ha andre tips, triks og retningslinjer for hvordan det bør/skal/må løses.

### Felles avsender

Noe føles rart når man fra den samme avsenderen får store eller små ulikheter i brukeropplevelsen.

![somethings wrong](../bilder/somethingswrong2.png)

### Verktøy rundt

- Linting (Lint/style-lint)
- Kommandolinjeverktøy (cli)

---

Mulig annen struktug:

## God brukeropplevelse

### Universell utforming

### Konsistent opplevelse/én avsender

## God utvikleropplevelse

### Intuitivt

### Tidsbesparende

### Konfigurerbart heller enn å dekke alle spesialtilfeller

---

- God
  - Brukeropplevelse (UX)
  - Utvikleropplevelse (DevX)

I en god brukeropplevelse ligger

- mulig å bruke (universelt utformet)
- Enkelt å bruke
- Konsistent opplevelse - Alt oppleves å komme fra én avsender

I en god utvikleropplevelse ligger mye rart basert på hva den enkelte uvikler liker, men noen ting er:

- Det skal være enkelt å bruke/være intuitivt i bruk
  - Gi mening sammenlignet med stanadarden (utvide klasser?/typer/elementer som allerede eksisterer (button, link, osv))
  - Ha navngiving og typer som gir intuitivt mening og er konsistent på tvers av systemet
  - Ikke bli for komplekst (farger(eller var det tokens) delt opp i bare to typer, ikke flere. Ikke ha for mange inndelinger av størrelser (atomer, molekyler osv) - det gjør ofte ting bare mer rotete og vanskeligere å vite hvor ting skal være).
- Være tidsbesparende (Hvordan er det tidsbesparende?)
  - Aksel har støtte i komponentene for ulike tokens til ulike skjermstørrelser. (innebygd støtte for responsivt design)
  - Kommer med universell utforming ut av boksen (kontraster må utvikleren riktignok sørge for selv)
- Inneholde relevant innhold
  - komponenter og tokens man faktisk har bruk for
- Være customizable(konfigurerbart?), slik at man kan løse sine egne spesialtilfeller, som uunngåelig vil komme opp. Et designsystem kan ikke dekke alle caser (for mye å lage og vedlikeholde, og det ville blitt et salig kaos)

Hvordan har Aksel løst å være konfigurerbart?

-

## Konklusjon

Oppsummert virker det som det er de mange små valgene som gjør et godt designsystem godt. De små tingene som sørger for at utviklere kan bruke ting rett ut av boksen, konfigurere, utvide, skape litt mer, tenke litt mindre (eller kanskje heller tenke litt mer på det som gir verdi), gjøre litt mer av det morsomme og gjøre litt mindre av det kjedelige. Resultatet om man gjør det riktig, blir at alle i en organisasjon faktisk kan bruke det samme systemet. Tilbake får du et konsistent design, åpenbart fra én avsender som er intuitivt å bruke og ikke minst tilgjengelig for alle.

Men som enkeltperson da - er det noe vits å lage sitt eget designsystem? Vel, det vil gi deg et konsistent uttrykk på web-sidene dine, om du lager den slags på fritiden, og du slipper å implementere tidkrevende ting som universell utforming på nytt hver gang (om du bryr deg om den slags). Du får også generelle komponenter rett ut av din egen boks, og kan spare tid på den måten. I tillegg har vi jo alle opplevd at vi gjerne skulle ha dokumentert vår egen kode bedre, både for å forstå valgene, men også noen ganger bare for å forstå.

Det korteste veien til mål er nok likevel å bare bruke et av de store komponentbibliotekene som ...(legg inn lenker til et par eksempler her). Resultatet blir noe masseprodusert, men bryr den generelle brukeren seg noe særlig om det? Neppe.

Så det som taler for å lage ditt eget designsystem (yet another yadsy aka yayadsy), er nok mest av alt innsikten du får på veien.

Også er det jo gøy da.

### Notater til meg selv

- Storybook
  - Noe om systemene rundt Storybook
- WEB-components vs React og slikt må undersøkes
- Undersøke valg av css (module, inline, tailwind, etc.)
- Navngiving er essensielt så det er forståelig i bruk (se designtokens/farger)
- Et designsystem er ikke bare komponenter og tokens. I en organisasjon som ønsker et helhetlig visuelt uttrykk er det kanskje enda viktigere med regler for hvordan det skal brukes/dokumentasjon. Konsistent bruk/forklaring av bruk er også essensielt for å sikre at minst mulig brekker ved oppdatering av pakker. Eksempel: interne komponent-tokens (--ac-...)
- Opplever at den store forskjellen er dokumentasjon og verktøy som lint og cli. Dette sørger for (enforcer (hva er det på norsk?)) at bruken er korrekt. Eksempel: style-lint (https://aksel.nav.no/grunnleggende/kode/stylelint). Dette er særlig viktig for større organisasjoner, men selv om man bare bruker sitt eget designsystem selv, så vet man jo at man kan glemme valg man har gjort og hvordan ting skal gjøres. Lint fungerer også som dokumentasjon.
- Når er det nyttig å lage et designsystem? I hvilken skala er det nyttig? Kan det være nyttig for en selv? Er det bedre å bruke store designsystem fra npm? Fordeler og ulemper?
- Hvis man har et design i Figma, så skulle man tro det ganske kjapt kan være nyttig å implementere det som et designsystem?
- Hovedpoeng med et designsystem er å spare tid i implementasjon og å sikre en konsistent brukeropplevelse. (Flere ting?). Hvilke ting er det mest tid å spare på? Når er en organisasjon stor nok til at man sparer inn tid på å bygge og vedlikeholde et designsystem?
- WCAG/UU er komplekst å sette seg inn i. Å sikre dette vil kunne være effektivt gjennom et designsystem (noen ting som kontraster må brukeren selv sørge for. Må bruke verktøy for å verifisere kontraster)
- Fleksibilitet er essensielt for at et bibliotek skal være brukbart, siden alle/mange vil ha sine egne spesialtilfeller som det ikke er mulig/ønskelig/for ressurskrevende å dekke opp for. Dermed må det være rom for å endre/fleksibilitet for å sikre bred adopsjon.
- Refleksjonene i denne bloggen er basert på refleksjoner og teoretisk kunnskap. Har du erfaringer på hva som egentlig betyr noe? Fyr av en kule i kommentarfeltet.
- Konsistente mønstre, defaults og navnekonvensjoner er viktig for brukervennlighet. Brukervennlighet er halvparten av poenget (den andre er konsistent brukeropplevelse)
- UX og DevX er alt. Kjapt og enkelt å bruke for å lage konsistente og brukervennlige web-sider.
- Rundt fordelene med universell utforming i designsytem: sparer tid, siden man løser et problem én gang, i stedet for mange ganger. Hver utvikler trenger da heller ikke være en ekspert på regelverket. Man kan også ha dokumentasjon av retningslinjer og verktøy beskrevet i designsystemet.

#### Aksel

- god, gammaldags CSS, og å ta i bruk CSS modules for å få isolasjon av stiler per komponent.
- API: Alle komponentene er implementert med React forwardRef. Dette lar deg sende en ref som prop dersom du ønsker egen logikk på DOM-elementet. (Smart å tenke på hvordan ting kan være customizable, slik at det ikke blir for mange spesialtifeller som ikke fungerer)
- De fleste komponenter utvider typen til det underliggende HTML-elementet de benytter. Flere komponenter bruker også OverridableComponent. (Antakelig nyttig av flere grunner, men mest sannsynlig fordi da utnytter man kjente og dokumenterte
  standarder) (https://aksel.nav.no/grunnleggende/kode/overridablecomponent)
  - Flere av komponentene i Aksel er implementert med OverridableComponent. Dette API-et gjør det enkelt å overstyre hvilken komponent eller tag som komponenten rendres med.
- Komponentstyling er ikke integrert i React-koden. Du må selv importere @navikt/ds-css i prosjektet ditt manuelt. Stylingen er ikke auto-prefikset, så det er deres ansvar å løse dette ved hjelp av f.eks. PostCSS og Autoprefikser. De fleste bundlere løser dette for deg. (Dette er verdt å undersøke og forstå - tror det er ulikt til hvordan jeg har gjort det. Hvorfor?)
- Vi anbefaler alle å ta i bruk stylelint-konfigurasjonen vår. Den sikrer at tokens og styling fra Aksel fungerer som forventet. (Dette er smart og et grep jeg ikke har tatt - kan utvides når man finner måter å brekke koden på)
- Fonten vi benytter blir lastet fra CDN, slik at du må gjøre noen tilpasninger i løsningen din. (Dette er ulikt. Hvorfor har man gjort valget?)
- Ikonpakken vår inneholder totalt 800+ ikoner i stroke- og fill-versjon. Disse kan benyttes som separate React-komponenter eller direkte som SVG-er etter behov. (smart å ha dem både som svg og react-komponenter. Hva er fordelen med det?)
- Standard bredde og høyde på ikonene er satt til 1em for å gjøre det enkelt å plassere ikonene inline med tekst. Vi anbefaler hovedsakelig å bruke 24px der det er mulig, da ikonene er designet for denne størrelsen. (Smarte valg)
- Vi anbefaler også å bruke title-attributtet der det er mulig, fremfor aria-label, ettersom dette gir en bedre opplevelse for skjermleserbrukere. (UU-tanker
  )
- Bruke Figma for å utvikle design. "Disse bibliotekene sikrer at løsningene våre er universelt utformet, konsistente og effektive å utvikle."
- Versjonering av figmakomponenter, siden endringer av design/komponenter i Figma ikke har noen innebygd versjonering (med tanke på å bruke figma-komponenter i figma. Les mer: https://aksel.nav.no/grunnleggende/introduksjon/versjonering-i-figma)

Design tokens: (https://aksel.nav.no/grunnleggende/introduksjon/versjonering-i-figma, https://aksel.nav.no/grunnleggende/styling/design-tokens)

- Har graderinger av alle hovedfargene (rødt, blått, grønt osv.)
- Har et par hovedfarger (navrødt, hvit, transparent)
- Har gradering av semantiske farger (tilstandsfarger?/ting som skal si noe?) (action, success, danger) Basert på interaksjon og grad stort sett (hover/active, subtle, moderate)
- Har farger til tekst, ikoner, border, datavisualisering
- De har fonter med tokennavn som i yadsy (0, 1, 2, 3 osv.). Må finne ut av bakgrunnen for at man gjør det slik, og hva som er logikken om det er noen
- et godt system for navngiving av tokens. Eks: --a-data-surface-6-subtle, --a-nav-red, --a-z-index-popover. Hvorfor har man a først? Hva er navnet på det? (pre-etellerannet?) Antakelig for at det ikke skal bli rot med andre css-variabler fra andre systemer. Hva er navnet på når det blir rot?
- Støtte for ulike css-implementasjoner (er dette riktig ordbruk? Tviler) css, sass, less, js(styled comonents)
- tokens for breakpoints og regler for hvordan de skal brukes (mobile firest, desktop first - https://aksel.nav.no/grunnleggende/styling/brekkpunkter)

Farger: (https://aksel.nav.no/grunnleggende/styling/farger)

- Hovedprinsipp: enkelt så det kan brukes av mange team
- Delt i semantiske og globale farger (blue-500 vs text.action)
  - Spørsmål: hvor kommer konvensjonen med 300, 400, 500 osv fra?
  - Spørsmål: hvorfor er det blue-500 vs text.action? Er det fordi blue-500 er en ting, med bindestrek i stedet for mellomrom, mens text.action er noe annet (finne ikke en god beskrivelse)
    - Delvis svar: semantiske navn er bygget opp av 3 ledd: UI-element . Situasjon . Variant/Tilstand.
- «Semantisk» betyr bare at farger navngis etter bruk og funksjon.
- Selv om de er spesifikke, skal de semantiske fargene være fleksible sånn at de passer produktteamenes situasjoner. Bruk av semantiske farger vil dessuten gjøre oss i stand til å justere innstillinger som dark mode og høykontrast.
  - Dette legger til rette for fleksibilitet og temaer
- Fargetema: Det er mulig for deg å tilby fargetemaer om du bruker semantiske fargenavn i hele tjenesten din. Du endrer ikke på det semantiske fargenavnet som brukes i frontend når noen bytter tema. Du bytter heller ut de globale fargene som de semantiske fargene refererer til. Per nå er dette en teknisk mulighet. Det vil si at det ikke er designet en palett til dark mode eller høykontrast. Fargetema er teknisk forklart på denne siden.

Typografi: (https://aksel.nav.no/grunnleggende/styling/typografi)

- lesbar font
- linjelengde
- definerte størrelser
- til ulike situasjoner (label, detail, body osv.)

Lint (style-lint: https://aksel.nav.no/grunnleggende/kode/stylelint)
Sjekker

- At man ikke bruker ikke-eksisterende tokens

Tailwind CSS + Aksel

- Ved å legge Aksel i layer(components) , vil utilities som mb-4 kunne overskrive styling fra Aksel.
  Sjekk opp:

- CSS-Imports: (https://aksel.nav.no/grunnleggende/kode/css-import) Bruk kommandolinje-verktøyet vårt til å håndtere CSS import i løsningen din. Da blir cascading + mye mer håndtert for deg!
  - grav i hva dette innebærer: cascading + mye mer håndtert for deg
    - Delvis svar er her i docs for layers (https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
    -

layout-primitives (https://aksel.nav.no/grunnleggende/kode/layout-primitives)

- Primitives gjør det enklere å bygge layout som følger de samme konseptene og brekkpunktene, uten å måtte skrive noe egen CSS. Dette gjør det lettere å bygge responsive løsninger som fungerer likt på tvers av ulike apper.
- Som Page, HGrid og Box
