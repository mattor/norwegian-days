import type SpecialDay from './types/SpecialDay'

export function getRunicDays(year: number = new Date().getFullYear()): SpecialDay[] {
  return [
    {
      date: new Date(year, 0, 1),
      name: 'Nyttårsdag, åttendedagen',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 6),
      name: 'Helligtrekongersdag, trettendedagen',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 7),
      name: 'Eldbjørgdag, ildbergingsdag, St. Knut',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 11),
      name: 'Brettemesse, brokkismesse, brykkesmesse',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 12),
      name: 'Midtvinterdag, hökunótt',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 13),
      name: 'Tjuendedagen, Knutsdag, avfaredag, gamle nyttårsdag',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 14),
      name: 'Midtvinterdagen (hedensk jul)',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 17),
      name: 'Antonsmesse',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 20),
      name: 'Brødremesse',
      type: 'runic',
    },
    {
      date: new Date(year, 0, 25),
      name: 'Pålsmesse, Pål med bogen, Pål skytter',
      type: 'runic',
    },
    {
      date: new Date(year, 1, 2),
      name: 'Kyndelsmesse, kindermesse, kjærmesse, lysenes messe, missa candelarum',
      type: 'runic',
    },
    {
      date: new Date(year, 1, 3),
      name: 'Blåsmesse, Blåsius',
      type: 'runic',
    },
    {
      date: new Date(year, 1, 5),
      name: 'Ågotsmesse, musedagen',
      type: 'runic',
    },
    {
      date: new Date(year, 1, 22),
      name: 'Peters stol, Per varmestein, Per heitstein',
      type: 'runic',
    },
    {
      date: new Date(year, 1, 24),
      name: 'Mattismesse vår, Mattis',
      type: 'runic',
    },
    {
      date: new Date(year, 2, 9),
      name: 'De førti riddere',
      type: 'runic',
    },
    {
      date: new Date(year, 2, 12),
      name: 'Gregormesse, Gregoriusdagen, Gregusmesse, Groårsmesse',
      type: 'runic',
    },
    {
      date: new Date(year, 2, 17),
      name: 'Gjertrudsmesse, Gjertrudsdagen',
      type: 'runic',
    },
    {
      date: new Date(year, 2, 18),
      name: 'Petrus martyr, Per pekk i vatn',
      type: 'runic',
    },
    {
      date: new Date(year, 2, 21),
      name: 'Bendiksmesse, Bendik/Bent prøvesvin, (vårjevndøgn, jamvår)',
      type: 'runic',
    },
    {
      date: new Date(year, 2, 25),
      name: 'Maria bebudelsesdag, vårfrumesse, Marimesse, vårmesse',
      type: 'runic',
    },
    {
      date: new Date(year, 3, 14),
      name: 'Sommermål, sommerdag, sommernatt',
      type: 'runic',
    },
    {
      date: new Date(year, 3, 16),
      name: 'Magnusmesse, tredjedag sommer',
      type: 'runic',
    },
    {
      date: new Date(year, 3, 23),
      name: 'Jørgensdag',
      type: 'runic',
    },
    {
      date: new Date(year, 3, 25),
      name: 'Markusmesse, Markusdagen, store gangdag',
      type: 'runic',
    },
    {
      date: new Date(year, 4, 1),
      name: 'Gauksmesse, lille gangdag',
      type: 'runic',
    },
    {
      date: new Date(year, 4, 3),
      name: 'Korsmesse vår',
      type: 'runic',
    },
    {
      date: new Date(year, 4, 15),
      name: 'Hallvardsmesse, Hallvardsvaka, hallsok',
      type: 'runic',
    },
    {
      date: new Date(year, 4, 18),
      name: 'Eriksmesse',
      type: 'runic',
    },
    {
      date: new Date(year, 4, 22),
      name: 'Bjørnevåk',
      type: 'runic',
    },
    {
      date: new Date(year, 4, 25),
      name: 'Urbanus',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 3),
      name: 'Rasmusdagen, skoklefallsdagen',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 8),
      name: 'Medardus og Gilardus',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 9),
      name: 'Kolumbamesse, Kolbjørn med laksen',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 17),
      name: 'Botolfsmesse, botsok',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 21),
      name: 'Sommersolverv',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 22),
      name: 'De ti tusen riddere, de ti tusen martyrer',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 24),
      name: 'Sankthans, Jonsmesse, Jonsok',
      type: 'runic',
    },
    {
      date: new Date(year, 5, 29),
      name: 'Petersmesse, Persok, Peter med gullnøkkelen',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 2),
      name: 'Syftesok',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 8),
      name: 'Tredjevaka, Kjell fut, Kjell sviebygg, Seljemannamesse, Sunniva Virginis',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 10),
      name: 'Knutsmesse, knutsok, Knut med ljåen, Kong Knut',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 12),
      name: 'Kari med riva',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 14),
      name: 'Midtsommerdag',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 20),
      name: 'Marit Vassause, Margretemesse, Mari(t)messe',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 22),
      name: 'Mari stol, magdalidagen, magdalimesse',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 25),
      name: 'Jakobsmesse, Jakob våthatt',
      type: 'runic',
    },
    {
      date: new Date(year, 6, 29),
      name: 'Olsok, Olafsvaka',
      type: 'runic',
    },
    {
      date: new Date(year, 7, 1),
      name: 'Peters lenker, Peder vindfells dag, Per vinkel',
      type: 'runic',
    },
    {
      date: new Date(year, 7, 3),
      name: 'Vesle olsok, Olsok siare, Translatio Olavi',
      type: 'runic',
    },
    {
      date: new Date(year, 7, 10),
      name: 'Larsok, Lavransvaka',
      type: 'runic',
    },
    {
      date: new Date(year, 7, 15),
      name: 'Marimesse førre, våre frue dyre, Marias himmelfart',
      type: 'runic',
    },
    {
      date: new Date(year, 7, 24),
      name: 'Barsok, Bartholomeusmesse, bardonsok, Berdon bukkekniv, Bertel brytestrå',
      type: 'runic',
    },
    {
      date: new Date(year, 7, 29),
      name: 'Vergismesse, Johannes halshogg',
      type: 'runic',
    },
    {
      date: new Date(year, 8, 1),
      name: 'Eidismesse, Kvernknarren',
      type: 'runic',
    },
    {
      date: new Date(year, 8, 8),
      name: 'Marimesse siare, vår frue siare, morsmesse',
      type: 'runic',
    },
    {
      date: new Date(year, 8, 14),
      name: 'Korsmesse høst',
      type: 'runic',
    },
    {
      date: new Date(year, 8, 21),
      name: 'Mattismesse høst, Mattheusmesse, Mattisdag, (høstjevndøgn)',
      type: 'runic',
    },
    {
      date: new Date(year, 8, 29),
      name: 'Mikkelsmesse, mikeli',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 4),
      name: 'St. Frans',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 7),
      name: 'Britemesse',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 9),
      name: 'Dinesmesse, Deinets dag',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 14),
      name: 'Vinternettene, vinterdag, vinternatt',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 18),
      name: 'Lukasmesse, Lukas våtmann',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 21),
      name: 'Ursula, 11 000 jomfruer',
      type: 'runic',
    },
    {
      date: new Date(year, 9, 28),
      name: 'Simonsmesse, Simon og Judas',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 1),
      name: 'Allehelgensdag, helgemesse, aldermesse',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 2),
      name: 'Alle sjelers dag',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 11),
      name: 'Mortensmesse, Mortensdag',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 21),
      name: 'Marioffer (Presentatio Mariae)',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 23),
      name: 'Klemetsmesse, båtsok, Klemet kirkebygger, Klemet saueskjærer',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 25),
      name: 'Karimesse, Karenmesse, Kari med rokken',
      type: 'runic',
    },
    {
      date: new Date(year, 10, 30),
      name: 'Andersmesse, Anders fisker',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 4),
      name: 'Barbromesse, Barbrodøgnet',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 6),
      name: 'Nilsmesse, Nikolausdagen',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 8),
      name: 'Maria unnfangelsesdag, vår frue ventedør',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 9),
      name: 'Anna matris Mariae, Anna røytrauv, (Anna) pissihose, Annadagen',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 13),
      name: 'Lussimesse, Lussinatt, Luciadagen',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 21),
      name: 'Tomasmesse I, Tomas brygger',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 22),
      name: 'Vintersolverv',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 23),
      name: 'Tollesmesse, Sjursmesse, lille julaften, vaskenatt',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 25),
      name: 'Juledag, Natalis Christi',
      type: 'runic',
    },
    {
      date: new Date(year, 11, 28),
      name: 'Barnedag, barnemesse',
      type: 'runic',
    },
  ]
}
