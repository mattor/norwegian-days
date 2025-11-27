import type ISpecialDay from './types/ISpecialDay'
import SpecialDayType from './types/SpecialDayType'

function getRunicDays(year: number = new Date().getFullYear()): ISpecialDay[] {
  return [
    {
      date: new Date(year, 0, 1),
      name: 'Nyttårsdag, åttendedagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 6),
      name: 'Helligtrekongersdag, trettendedagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 7),
      name: 'Eldbjørgdag, ildbergingsdag, St. Knut',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 11),
      name: 'Brettemesse, brokkismesse, brykkesmesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 12),
      name: 'Midtvinterdag, hökunótt',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 13),
      name: 'Tjuendedagen, Knutsdag, avfaredag, gamle nyttårsdag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 14),
      name: 'Midtvinterdagen (hedensk jul)',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 17),
      name: 'Antonsmesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 20),
      name: 'Brødremesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 0, 25),
      name: 'Pålsmesse, Pål med bogen, Pål skytter',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 1, 2),
      name: 'Kyndelsmesse, kindermesse, kjærmesse, lysenes messe, missa candelarum',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 1, 3),
      name: 'Blåsmesse, Blåsius',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 1, 5),
      name: 'Ågotsmesse, musedagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 1, 22),
      name: 'Peters stol, Per varmestein, Per heitstein',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 1, 24),
      name: 'Mattismesse vår, Mattis',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 2, 9),
      name: 'De førti riddere',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 2, 12),
      name: 'Gregormesse, Gregoriusdagen, Gregusmesse, Groårsmesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 2, 17),
      name: 'Gjertrudsmesse, Gjertrudsdagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 2, 18),
      name: 'Petrus martyr, Per pekk i vatn',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 2, 21),
      name: 'Bendiksmesse, Bendik/Bent prøvesvin, (vårjevndøgn, jamvår)',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 2, 25),
      name: 'Maria bebudelsesdag, vårfrumesse, Marimesse, vårmesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 3, 14),
      name: 'Sommermål, sommerdag, sommernatt',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 3, 16),
      name: 'Magnusmesse, tredjedag sommer',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 3, 23),
      name: 'Jørgensdag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 3, 25),
      name: 'Markusmesse, Markusdagen, store gangdag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 4, 1),
      name: 'Gauksmesse, lille gangdag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 4, 3),
      name: 'Korsmesse vår',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 4, 15),
      name: 'Hallvardsmesse, Hallvardsvaka, hallsok',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 4, 18),
      name: 'Eriksmesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 4, 22),
      name: 'Bjørnevåk',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 4, 25),
      name: 'Urbanus',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 3),
      name: 'Rasmusdagen, skoklefallsdagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 8),
      name: 'Medardus og Gilardus',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 9),
      name: 'Kolumbamesse, Kolbjørn med laksen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 17),
      name: 'Botolfsmesse, botsok',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 21),
      name: 'Sommersolverv',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 22),
      name: 'De ti tusen riddere, de ti tusen martyrer',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 24),
      name: 'Sankthans, Jonsmesse, Jonsok',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 5, 29),
      name: 'Petersmesse, Persok, Peter med gullnøkkelen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 2),
      name: 'Syftesok',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 8),
      name: 'Tredjevaka, Kjell fut, Kjell sviebygg, Seljemannamesse, Sunniva Virginis',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 10),
      name: 'Knutsmesse, knutsok, Knut med ljåen, Kong Knut',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 12),
      name: 'Kari med riva',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 14),
      name: 'Midtsommerdag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 20),
      name: 'Marit Vassause, Margretemesse, Mari(t)messe',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 22),
      name: 'Mari stol, magdalidagen, magdalimesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 25),
      name: 'Jakobsmesse, Jakob våthatt',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 6, 29),
      name: 'Olsok, Olafsvaka',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 7, 1),
      name: 'Peters lenker, Peder vindfells dag, Per vinkel',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 7, 3),
      name: 'Vesle olsok, Olsok siare, Translatio Olavi',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 7, 10),
      name: 'Larsok, Lavransvaka',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 7, 15),
      name: 'Marimesse førre, våre frue dyre, Marias himmelfart',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 7, 24),
      name: 'Barsok, Bartholomeusmesse, bardonsok, Berdon bukkekniv, Bertel brytestrå',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 7, 29),
      name: 'Vergismesse, Johannes halshogg',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 8, 1),
      name: 'Eidismesse, Kvernknarren',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 8, 8),
      name: 'Marimesse siare, vår frue siare, morsmesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 8, 14),
      name: 'Korsmesse høst',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 8, 21),
      name: 'Mattismesse høst, Mattheusmesse, Mattisdag, (høstjevndøgn)',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 8, 29),
      name: 'Mikkelsmesse, mikeli',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 4),
      name: 'St. Frans',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 7),
      name: 'Britemesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 9),
      name: 'Dinesmesse, Deinets dag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 14),
      name: 'Vinternettene, vinterdag, vinternatt',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 18),
      name: 'Lukasmesse, Lukas våtmann',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 21),
      name: 'Ursula, 11 000 jomfruer',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 9, 28),
      name: 'Simonsmesse, Simon og Judas',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 1),
      name: 'Allehelgensdag, helgemesse, aldermesse',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 2),
      name: 'Alle sjelers dag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 11),
      name: 'Mortensmesse, Mortensdag',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 21),
      name: 'Marioffer (Presentatio Mariae)',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 23),
      name: 'Klemetsmesse, båtsok, Klemet kirkebygger, Klemet saueskjærer',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 25),
      name: 'Karimesse, Karenmesse, Kari med rokken',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 10, 30),
      name: 'Andersmesse, Anders fisker',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 4),
      name: 'Barbromesse, Barbrodøgnet',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 6),
      name: 'Nilsmesse, Nikolausdagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 8),
      name: 'Maria unnfangelsesdag, vår frue ventedør',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 9),
      name: 'Anna matris Mariae, Anna røytrauv, (Anna) pissihose, Annadagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 13),
      name: 'Lussimesse, Lussinatt, Luciadagen',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 21),
      name: 'Tomasmesse I, Tomas brygger',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 22),
      name: 'Vintersolverv',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 23),
      name: 'Tollesmesse, Sjursmesse, lille julaften, vaskenatt',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 25),
      name: 'Juledag, Natalis Christi',
      type: SpecialDayType.Runic,
    },
    {
      date: new Date(year, 11, 28),
      name: 'Barnedag, barnemesse',
      type: SpecialDayType.Runic,
    },
  ]
}

export default getRunicDays
