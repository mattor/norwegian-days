# norwegian-days [![NPM version](https://img.shields.io/npm/v/norwegian-days.svg?style=flat)](https://www.npmjs.com/package/norwegian-days) [![NPM total downloads](https://img.shields.io/npm/dt/norwegian-days.svg?style=flat)](https://npmjs.org/package/norwegian-days)

> Generate a list of Norway's public holidays, Runic calendar days and other celebrations during a year

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save norwegian-days
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add norwegian-days
```

## Usage

```js
import getSpecialDays from 'norwegian-days'

// Get all public holidays and celebrations of current year
const specialDaysOfCurrentYear = getSpecialDays()

// Get all public holidays and celebrations of the year 1977
const specialDaysOf1977 = getSpecialDays(1977)

// Get all Runic calendar days of the year 2019
const specialDaysOf2019 = getSpecialDays(2019, ['RUNIC'])
```

## Included days

### Public holidays

- Første nyttårsdag
- Palmesøndag
- Skjærtorsdag
- Langfredag
- Første påskedag
- Andre påskedag
- Kristi himmelfartsdag
- Offentlig høytidsdag (1. mai)
- Grunnlovsdag (17. mai)
- Første pinsedag
- Andre pinsedag
- Julaften
- Første juledag
- Andre juledag
- Nyttårsaften

### Celebration days

- Grisens dag
- Samefolkets dag
- Valentinsdag
- Morsdag
- Fiskens dag
- Den internasjonale kvinnedagen
- Verdens vanndag
- Den store vaffeldagen
- Kakedagen
- Jordens dag (Earth Day)
- Feitetirsdag
- Pannekakedagen
- Årets første grilldag
- Verdens melkedag
- Sjømatens dag
- Sankthans
- Olsok
- Den norske epledagen
- Verdens skolemelkdag
- Fårikålens festdag
- Lutefisksesongen starter
- Kanelbollens dag
- Verdens eggdag
- Verdens matvaredag
- Verdens brøddag
- Grøtdagen
- Halloween
- Ostens dag
- Mortensmesse
- Farsdag
- Thanksgiving
- Den internasjonale mannsdagen
- Luciadagen
- Første søndag i advent
- Andre søndag i advent
- Tredje søndag i advent
- Fjerde søndag i advent

### Runic calendar days

- Nyttårsdag, åttendedagen
- Helligtrekongersdag, trettendedagen
- Eldbjørgdag, ildbergingsdag, St. Knut
- Brettemesse, brokkismesse, brykkesmesse
- Midtvinterdag, hökunótt
- Tjuendedagen, Knutsdag, avfaredag, gamle nyttårsdag
- Midtvinterdagen (hedensk jul)
- Antonsmesse
- Brødremesse
- Pålsmesse, Pål med bogen, Pål skytter
- Kyndelsmesse, kindermesse, kjærmesse, lysenes messe, missa candelarum
- Blåsmesse, Blåsius
- Ågotsmesse, musedagen
- Peters stol, Per varmestein, Per heitstein
- Mattismesse vår, Mattis
- De førti riddere
- Gregormesse, Gregoriusdagen, Gregusmesse, Groårsmesse
- Gjertrudsmesse, Gjertrudsdagen
- Petrus martyr, Per pekk i vatn
- Bendiksmesse, Bendik/Bent prøvesvin, (vårjevndøgn, jamvår)
- Maria bebudelsesdag, vårfrumesse, Marimesse, vårmesse
- Sommermål, sommerdag, sommernatt
- Magnusmesse, tredjedag sommer
- Jørgensdag
- Markusmesse, Markusdagen, store gangdag
- Gauksmesse, lille gangdag
- Korsmesse vår
- Hallvardsmesse, Hallvardsvaka, hallsok
- Eriksmesse
- Bjørnevåk
- Urbanus
- Rasmusdagen, skoklefallsdagen
- Medardus og Gilardus
- Kolumbamesse, Kolbjørn med laksen
- Botolfsmesse, botsok
- Sommersolverv
- De ti tusen riddere, de ti tusen martyrer
- Sankthans, Jonsmesse, Jonsok
- Petersmesse, Persok, Peter med gullnøkkelen
- Syftesok
- Tredjevaka, Kjell fut, Kjell sviebygg, Seljemannamesse, Sunniva Virginis
- Knutsmesse, knutsok, Knut med ljåen, Kong Knut
- Kari med riva
- Midtsommerdag
- Marit Vassause, Margretemesse, Mari(t)messe
- Mari stol, magdalidagen, magdalimesse
- Jakobsmesse, Jakob våthatt
- Olsok, Olafsvaka
- Peters lenker, Peder vindfells dag, Per vinkel
- Vesle olsok, Olsok siare, Translatio Olavi
- Larsok, Lavransvaka
- Marimesse førre, våre frue dyre, Marias himmelfart
- Barsok, Bartholomeusmesse, bardonsok, Berdon bukkekniv, Bertel brytestrå
- Vergismesse, Johannes halshogg
- Eidismesse, Kvernknarren
- Marimesse siare, vår frue siare, morsmesse
- Korsmesse høst
- Mattismesse høst, Mattheusmesse, Mattisdag, (høstjevndøgn)
- Mikkelsmesse, mikeli
- St. Frans
- Britemesse
- Dinesmesse, Deinets dag
- Vinternettene, vinterdag, vinternatt
- Lukasmesse, Lukas våtmann
- Ursula, 11 000 jomfruer
- Simonsmesse, Simon og Judas
- Allehelgensdag, helgemesse, aldermesse
- Alle sjelers dag
- Mortensmesse, Mortensdag
- Marioffer (Presentatio Mariae)
- Klemetsmesse, båtsok, Klemet kirkebygger, Klemet saueskjærer
- Karimesse, Karenmesse, Kari med rokken
- Andersmesse, Anders fisker
- Barbromesse, Barbrodøgnet
- Nilsmesse, Nikolausdagen
- Maria unnfangelsesdag, vår frue ventedør
- Anna matris Mariae, Anna røytrauv, (Anna) pissihose, Annadagen
- Lussimesse, Lussinatt, Luciadagen
- Tomasmesse I, Tomas brygger
- Vintersolverv
- Tollesmesse, Sjursmesse, lille julaften, vaskenatt
- Juledag, Natalis Christi
- Barnedag, barnemesse
