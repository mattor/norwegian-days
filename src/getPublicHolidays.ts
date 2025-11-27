import type { SpecialDay } from './types/SpecialDay'
import { getEasterSunday } from './helpers/getEasterSunday'

export function getPublicHolidays(year: number = new Date().getFullYear()): SpecialDay[] {
  const easter = getEasterSunday(year)

  return [
    {
      date: new Date(year, 0, 1),
      name: 'Første nyttårsdag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day - 7),
      name: 'Palmesøndag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day - 3),
      name: 'Skjærtorsdag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day - 2),
      name: 'Langfredag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day),
      name: 'Første påskedag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day + 1),
      name: 'Andre påskedag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day + 39),
      name: 'Kristi himmelfartsdag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, 4, 1),
      name: 'Offentlig høytidsdag (1. mai)',
      type: 'public-holiday',
    },
    {
      date: new Date(year, 4, 17),
      name: 'Grunnlovsdag (17. mai)',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day + 49),
      name: 'Første pinsedag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, easter.month, easter.day + 50),
      name: 'Andre pinsedag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, 11, 24),
      name: 'Julaften',
      type: 'public-holiday',
    },
    {
      date: new Date(year, 11, 25),
      name: 'Første juledag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, 11, 26),
      name: 'Andre juledag',
      type: 'public-holiday',
    },
    {
      date: new Date(year, 11, 31),
      name: 'Nyttårsaften',
      type: 'public-holiday',
    },
  ]
}
