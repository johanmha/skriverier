---
title: Designsystem - fra zero til hero
date: 2025-03-05
published:
---

# Designsystem - fra zero til hero

Et par disclaimers: jeg var strengt tatt ikke helt ingenting, eller zero, når jeg begynte denne læringsreisen. Jeg har jobbet med .... . Om jeg er blitt noen hero er også høyst diskutabelt, men at jeg har fått en brukbar forståelse for do's and dont's' på feltet er ikke å tøye strikken.

Til slutt før vi begynner: hvor ok språkrådet er med at jeg skriver zero til hero på norsk er jeg usikker på, men når Disney kunne gjøre det i sin 1997?-klassiker, Herkules, så må det være greit at også jeg gjør det.

## Introduksjon (finn en mer catchy tittel?)

### Hva snakker vi om her

Ordet designsystem kan strengt tatt brukes om flere ting. I designverden kan det for eksempel være et design satt opp i eksempelvis Figma, som beskriver alt fra de minste bestanddelene som farger og fonter, til grunnkomponenter som knapper og ... til større sammenstillinger som kort, og hele sider.

Slik sett er det nært beslektet designsystemet vi snakker om i denne bloggposten: komponentbiblioteket brukt i frontend-utvikling. Det består i følge Storybook av

- design tokens
- komponenter
- ... (se på storybook sin definisjon a)

Om du skulle lure på hva Storybook er, så kommer vi tilbake til det om ikke så lenge

### Prosessen/Metoden

Begynte med å sette opp mitt eget system uten å tenke noe særlig på hva som er lurt og hva som er skikkelig dumt. Med hjelp av min foretrukne språkmotor kom det opp fort og gæli, og er i dag ute som et konsept-system på NPM. Resultatet ble yadsy (yet another design system), som kan sjekkes opp [her](url).

Deretter undersøkt jeg norske state of the art(finn norsk ord) designsystemer fra [NAV](url) og [Digdir](url). Gått dem etter i sømmene for å forstå hvilke valg de har tatt, hva de har gjort og ikke minst, hva de ikke har gjort.

Det spennende nå blir å se hva du får når du tenker og grubler på arkitekturen, heller enn å bare kaste noe på veggen og se hva som skjer.

## Stilstudie

###

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
