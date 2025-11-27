import type { DateString } from '../types/DateString'
import { getDateString } from './getDateString'

export function getNthLastWeekdayInMonth(nth: number, day: number, m: number, y: number): DateString {
  let targetDay = new Date(0, 0, 0)
  let curDay = 0
  let i = new Date(y, m + 1, 0).getDate()

  while (curDay < nth && i >= 1) {
    targetDay = new Date(y, m, i--)
    if (targetDay.getDay() === day) {
      curDay++
    }
  }

  return getDateString(targetDay.getDate(), targetDay.getMonth() + 1, targetDay.getFullYear())
}
