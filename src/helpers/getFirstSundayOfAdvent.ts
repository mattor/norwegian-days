export function getFirstSundayOfAdvent(year: number) {
  const maxDay = new Date(year, 11, 3) // December 3rd
  const maxDayWeekday = maxDay.getDay()
  const firstAdventSunday = new Date(year, 11, 3 - maxDayWeekday)

  return {
    day: firstAdventSunday.getDate(), // Day of the first Sunday of Advent
    month: firstAdventSunday.getMonth() + 1, // Month of the first Sunday of Advent
  }
}
