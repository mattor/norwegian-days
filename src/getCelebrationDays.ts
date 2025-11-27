import type SpecialDay from './types/SpecialDay'
import { getEasterSunday } from './helpers/getEasterSunday'
import { getNthLastWeekdayInMonth } from './helpers/getNthLastWeekdayInMonth'
import { getNthWeekdayInMonth } from './helpers/getNthWeekdayInMonth'
import { Weekday } from './types/Weekday'

export function getCelebrationDays(year: number = new Date().getFullYear()): SpecialDay[] {
  const easter = getEasterSunday(year)

  return [
    {
      date: new Date(year, 0, 17),
      name: 'Grisens dag',
      type: 'celebration',
      id: 'pigs-day',
    },
    {
      date: new Date(year, 1, 6),
      name: 'Samefolkets dag',
      type: 'celebration',
      id: 'sami-people-day',
    },
    {
      date: new Date(year, 1, 14),
      name: 'Valentinsdag',
      type: 'celebration',
      id: 'valentines-day',
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Sunday, 1, year),
      name: 'Morsdag',
      type: 'celebration',
      id: 'mothers-day',
    },
    {
      date: new Date(year, 2, 6),
      name: 'Fiskens dag',
      type: 'celebration',
      id: 'fish-day',
    },
    {
      date: new Date(year, 2, 22),
      name: 'Verdens vanndag',
      type: 'celebration',
    },
    {
      date: new Date(year, 2, 25),
      name: 'Den store vaffeldagen',
      type: 'celebration',
      id: 'world-water-day',
    },
    {
      date: new Date(year, 3, 8),
      name: 'Kakedagen',
      type: 'celebration',
    },
    {
      date: new Date(year, 3, 22),
      name: 'Jordens dag (Earth Day)',
      type: 'celebration',
    },
    {
      date: new Date(year, easter.month, easter.day - 5),
      name: 'Feitetirsdag',
      type: 'celebration',
    },
    {
      date: new Date(year, easter.month, easter.day - 5),
      name: 'Pannekakedagen',
      type: 'celebration',
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Saturday, 4, year),
      name: 'Årets første grilldag',
      type: 'celebration',
    },
    {
      date: new Date(year, 5, 1),
      name: 'Verdens melkedag',
      type: 'celebration',
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Saturday, 5, year),
      name: 'Sjømatens dag',
      type: 'celebration',
    },
    {
      date: new Date(year, 5, 23),
      name: 'Sankthans',
      type: 'celebration',
    },
    {
      date: new Date(year, 6, 29),
      name: 'Olsok',
      type: 'celebration',
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Tuesday, 8, year),
      name: 'Den norske epledagen',
      type: 'celebration',
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Wednesday, 8, year),
      name: 'Verdens skolemelkdag',
      type: 'celebration',
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Thursday, 8, year),
      name: 'Fårikålens festdag',
      type: 'celebration',
    },
    {
      date: getNthWeekdayInMonth(1, Weekday.Wednesday, 9, year),
      name: 'Lutefisksesongen starter',
      type: 'celebration',
    },
    {
      date: new Date(year, 9, 4),
      name: 'Kanelbollens dag',
      type: 'celebration',
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Friday, 9, year),
      name: 'Verdens eggdag',
      type: 'celebration',
    },
    {
      date: new Date(year, 9, 16),
      name: 'Verdens matvaredag',
      type: 'celebration',
    },
    {
      date: new Date(year, 9, 16),
      name: 'Verdens brøddag',
      type: 'celebration',
    },
    {
      date: new Date(year, 9, 23),
      name: 'Grøtdagen',
      type: 'celebration',
    },
    {
      date: new Date(year, 9, 31),
      name: 'Halloween',
      type: 'celebration',
    },
    {
      date: getNthLastWeekdayInMonth(1, Weekday.Friday, 9, year),
      name: 'Ostens dag',
      type: 'celebration',
    },
    {
      date: new Date(year, 10, 11),
      name: 'Mortensmesse',
      type: 'celebration',
    },
    {
      date: getNthWeekdayInMonth(2, Weekday.Sunday, 10, year),
      name: 'Farsdag',
      type: 'celebration',
    },
    {
      date: getNthWeekdayInMonth(4, Weekday.Thursday, 10, year),
      name: 'Thanksgiving',
      type: 'celebration',
    },
    {
      date: new Date(year, 11, 13),
      name: 'Luciadagen',
      type: 'celebration',
    },
  ]
}
