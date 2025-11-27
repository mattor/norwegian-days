import type { DateString } from '../types/DateString'

export function getDateString(day: number, month: number, year: number): DateString {
  const date = new Date(year, month - 1, day + 1)
  return date.toISOString().split('T')[0] as DateString
}
