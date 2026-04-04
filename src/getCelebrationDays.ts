import type { SpecialDay } from './types/SpecialDay.js'
import { CelebrationDayId } from './const/SpecialDayId.js'
import { Weekday } from './const/Weekday.js'
import { getDateString } from './helpers/getDateString.js'
import { getEasterSunday } from './helpers/getEasterSunday.js'
import { getFirstSundayOfAdvent } from './helpers/getFirstSundayOfAdvent.js'
import { getNthLastWeekdayInMonth } from './helpers/getNthLastWeekdayInMonth.js'
import { getNthWeekdayInMonth } from './helpers/getNthWeekdayInMonth.js'

export function getCelebrationDays(year: number = new Date().getFullYear()): SpecialDay[] {
  const easter = getEasterSunday(year)
  const firstSundayOfAdvent = getFirstSundayOfAdvent(year)

  return [
    {
      date: getDateString(17, 1, year),
      name: 'Grisens dag',
      type: 'celebration',
      id: CelebrationDayId.PigsDay,
    },
    {
      date: getDateString(6, 2, year),
      name: 'Samefolkets dag',
      type: 'celebration',
      id: CelebrationDayId.SamiPeoplesDay,
    },
    {
      date: getDateString(14, 2, year),
      name: 'Valentinsdag',
      type: 'celebration',
      id: CelebrationDayId.ValentinesDay,
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Sunday, 1, year),
      name: 'Morsdag',
      type: 'celebration',
      id: CelebrationDayId.MothersDay,
    },
    {
      date: getDateString(6, 3, year),
      name: 'Fiskens dag',
      type: 'celebration',
      id: CelebrationDayId.FishDay,
    },
    {
      date: getDateString(8, 3, year),
      name: 'Den internasjonale kvinnedagen',
      type: 'celebration',
      id: CelebrationDayId.InternationalWomensDay,
    },
    {
      date: getDateString(22, 3, year),
      name: 'Verdens vanndag',
      type: 'celebration',
      id: CelebrationDayId.WorldWaterDay,
    },
    {
      date: getDateString(25, 3, year),
      name: 'Den store vaffeldagen',
      type: 'celebration',
      id: CelebrationDayId.WorldWaffleDay,
    },
    {
      date: getDateString(8, 4, year),
      name: 'Kakedagen',
      type: 'celebration',
      id: CelebrationDayId.CakeDay,
    },
    {
      date: getDateString(22, 4, year),
      name: 'Jordens dag (Earth Day)',
      type: 'celebration',
      id: CelebrationDayId.EarthDay,
    },
    {
      date: getDateString(easter.day - 5, easter.month, year),
      name: 'Feitetirsdag',
      type: 'celebration',
      id: CelebrationDayId.EasterTuesday,
    },
    {
      date: getDateString(easter.day - 5, easter.month, year),
      name: 'Pannekakedagen',
      type: 'celebration',
      id: CelebrationDayId.PancakeDay,
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Saturday, 4, year),
      name: 'Årets første grilldag',
      type: 'celebration',
      id: CelebrationDayId.FirstGrillDay,
    },
    {
      date: getDateString(1, 6, year),
      name: 'Verdens melkedag',
      type: 'celebration',
      id: CelebrationDayId.WorldMilkDay,
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Saturday, 5, year),
      name: 'Sjømatens dag',
      type: 'celebration',
      id: CelebrationDayId.SeaFoodDay,
    },
    {
      date: getDateString(23, 6, year),
      name: 'Sankthans',
      type: 'celebration',
      id: CelebrationDayId.MidsummersEve,
    },
    {
      date: getDateString(29, 7, year),
      name: 'Olsok',
      type: 'celebration',
      id: CelebrationDayId.Olsok,
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Tuesday, 8, year),
      name: 'Den norske epledagen',
      type: 'celebration',
      id: CelebrationDayId.NorwegianAppleDay,
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Wednesday, 8, year),
      name: 'Verdens skolemelkdag',
      type: 'celebration',
      id: CelebrationDayId.WorldSchoolMilkDay,
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Thursday, 8, year),
      name: 'Fårikålens festdag',
      type: 'celebration',
      id: CelebrationDayId.FeastOfTheSheepCabbage,
    },
    {
      date: getNthWeekdayInMonth(1, Weekday.Wednesday, 9, year),
      name: 'Lutefisksesongen starter',
      type: 'celebration',
      id: CelebrationDayId.StartOfLuteFishSeason,
    },
    {
      date: getDateString(4, 10, year),
      name: 'Kanelbollens dag',
      type: 'celebration',
      id: CelebrationDayId.CinnamonRollDay,
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Friday, 9, year),
      name: 'Verdens eggdag',
      type: 'celebration',
      id: CelebrationDayId.WorldEggDay,
    },
    {
      date: getDateString(16, 10, year),
      name: 'Verdens matvaredag',
      type: 'celebration',
      id: CelebrationDayId.WorldFoodDay,
    },
    {
      date: getDateString(16, 10, year),
      name: 'Verdens brøddag',
      type: 'celebration',
      id: CelebrationDayId.WorldBreadDay,
    },
    {
      date: getDateString(23, 10, year),
      name: 'Grøtdagen',
      type: 'celebration',
      id: CelebrationDayId.PorridgeDay,
    },
    {
      date: getDateString(31, 10, year),
      name: 'Halloween',
      type: 'celebration',
      id: CelebrationDayId.Halloween,
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Friday, 9, year),
      name: 'Ostens dag',
      type: 'celebration',
      id: CelebrationDayId.CheeseDay,
    },
    {
      date: getDateString(11, 11, year),
      name: 'Mortensmesse',
      type: 'celebration',
      id: CelebrationDayId.MortensFair,
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Sunday, 10, year),
      name: 'Farsdag',
      type: 'celebration',
      id: CelebrationDayId.FathersDay,
    },
    {
      date: getNthWeekdayInMonth(4, Weekday.Thursday, 10, year),
      name: 'Thanksgiving',
      type: 'celebration',
      id: CelebrationDayId.Thanksgiving,
    },
    {
      date: getDateString(19, 11, year),
      name: 'Den internasjonale mannsdagen',
      type: 'celebration',
      id: CelebrationDayId.InternationalMensDay,
    },
    {
      date: getDateString(13, 12, year),
      name: 'Luciadagen',
      type: 'celebration',
      id: CelebrationDayId.LuciaDay,
    },
    {
      date: getDateString(firstSundayOfAdvent.day, firstSundayOfAdvent.month, year),
      name: 'Første søndag i advent',
      type: 'celebration',
      id: CelebrationDayId.FirstSundayOfAdvent,
    },
    {
      date: getDateString(firstSundayOfAdvent.day + 7, firstSundayOfAdvent.month, year),
      name: 'Andre søndag i advent',
      type: 'celebration',
      id: CelebrationDayId.SecondSundayOfAdvent,
    },
    {
      date: getDateString(firstSundayOfAdvent.day + 14, firstSundayOfAdvent.month, year),
      name: 'Tredje søndag i advent',
      type: 'celebration',
      id: CelebrationDayId.ThirdSundayOfAdvent,
    },
    {
      date: getDateString(firstSundayOfAdvent.day + 21, firstSundayOfAdvent.month, year),
      name: 'Fjerde søndag i advent',
      type: 'celebration',
      id: CelebrationDayId.FourthSundayOfAdvent,
    },
    {
      date: getDateString(24, 12, year),
      name: 'Julaften',
      type: 'celebration',
      id: CelebrationDayId.ChristmasEve,
    },
    {
      date: getDateString(31, 12, year),
      name: 'Nyttårsaften',
      type: 'celebration',
      id: CelebrationDayId.NewYearsEve,
    },
  ]
}
