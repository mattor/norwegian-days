export function getNthLastWeekdayInMonth(nth: number, day: number, m: number, y: number): Date {
  let targetDay = new Date(0, 0, 0)
  let curDay = 0
  let i = new Date(y, m + 1, 0).getDate()

  while (curDay < nth && i >= 1) {
    targetDay = new Date(y, m, i--)
    if (targetDay.getDay() === day) {
      curDay++
    }
  }

  return targetDay
}
