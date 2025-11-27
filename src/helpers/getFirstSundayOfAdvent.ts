// The first Sunday of Advent is the Sunday closest to November 30th and can fall between November 27th and December 3rd.

export function getFirstSundayOfAdvent(year: number) {
  const december3rd = new Date(year, 11, 3) // December 3rd
  const december3rdWeekday = december3rd.getDay()
  const firstSundayOfAdvent = new Date(year, 11, 3 - december3rdWeekday)

  return {
    day: firstSundayOfAdvent.getDate(), // Day of the first Sunday of Advent
    month: firstSundayOfAdvent.getMonth() + 1, // Month of the first Sunday of Advent
  }
}
