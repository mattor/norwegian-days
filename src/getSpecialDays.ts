import type { SpecialDay } from './types/SpecialDay'
import type { SpecialDayType } from './types/SpecialDayType'
import { getCelebrationDays } from './getCelebrationDays'
import { getPublicHolidays } from './getPublicHolidays'
import { getRunicDays } from './getRunicDays'

export function getSpecialDays(year: number = new Date().getFullYear(), types: SpecialDayType[] = ['public-holiday', 'celebration']): SpecialDay[] {
  const specialDays: SpecialDay[] = [
    ...(types.includes('public-holiday') ? getPublicHolidays(year) : []),
    ...(types.includes('celebration') ? getCelebrationDays(year) : []),
    ...(types.includes('runic') ? getRunicDays(year) : []),
  ]

  return specialDays.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
}
