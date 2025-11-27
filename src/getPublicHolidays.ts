import type { SpecialDay } from './types/SpecialDay'
import { PublicHolidayId } from './const/SpecialDayId'
import { getDateString } from './helpers/getDateString'
import { getEasterSunday } from './helpers/getEasterSunday'

export function getPublicHolidays(year: number = new Date().getFullYear()): SpecialDay[] {
  const easter = getEasterSunday(year)

  return [
    {
      date: getDateString(1, 1, year),
      name: 'Første nyttårsdag',
      type: 'public-holiday',
      id: PublicHolidayId.NewYearsDay,
    },
    {
      date: getDateString(easter.day - 7, easter.month, year),
      name: 'Palmesøndag',
      type: 'public-holiday',
      id: PublicHolidayId.PalmSunday,
    },
    {
      date: getDateString(easter.day - 3, easter.month, year),
      name: 'Skjærtorsdag',
      type: 'public-holiday',
      id: PublicHolidayId.MaundyThursday,
    },
    {
      date: getDateString(easter.day - 2, easter.month, year),
      name: 'Langfredag',
      type: 'public-holiday',
      id: PublicHolidayId.GoodFriday,
    },
    {
      date: getDateString(easter.day, easter.month, year),
      name: 'Første påskedag',
      type: 'public-holiday',
      id: PublicHolidayId.EasterSunday,
    },
    {
      date: getDateString(easter.day + 1, easter.month, year),
      name: 'Andre påskedag',
      type: 'public-holiday',
      id: PublicHolidayId.EasterMonday,
    },
    {
      date: getDateString(easter.day + 39, easter.month, year),
      name: 'Kristi himmelfartsdag',
      type: 'public-holiday',
      id: PublicHolidayId.AscensionDay,
    },
    {
      date: getDateString(1, 5, year),
      name: 'Offentlig høytidsdag (1. mai)',
      type: 'public-holiday',
      id: PublicHolidayId.LabourDay,
    },
    {
      date: getDateString(17, 5, year),
      name: 'Grunnlovsdag (17. mai)',
      type: 'public-holiday',
      id: PublicHolidayId.ConstitutionDay,
    },
    {
      date: getDateString(easter.day + 49, easter.month, year),
      name: 'Første pinsedag',
      type: 'public-holiday',
      id: PublicHolidayId.WhitSunday,
    },
    {
      date: getDateString(easter.day + 50, easter.month, year),
      name: 'Andre pinsedag',
      type: 'public-holiday',
      id: PublicHolidayId.WhitMonday,
    },
    {
      date: getDateString(24, 12, year),
      name: 'Julaften',
      type: 'public-holiday',
      id: PublicHolidayId.ChristmasEve,
    },
    {
      date: getDateString(25, 12, year),
      name: 'Første juledag',
      type: 'public-holiday',
      id: PublicHolidayId.ChristmasDay,
    },
    {
      date: getDateString(26, 12, year),
      name: 'Andre juledag',
      type: 'public-holiday',
      id: PublicHolidayId.BoxingDay,
    },
    {
      date: getDateString(31, 12, year),
      name: 'Nyttårsaften',
      type: 'public-holiday',
      id: PublicHolidayId.NewYearsEve,
    },
  ]
}
