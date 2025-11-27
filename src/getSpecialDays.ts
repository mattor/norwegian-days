import type ISpecialDay from './types/ISpecialDay'
import getCelebrationDays from './getCelebrationDays'
import getPublicHolidays from './getPublicHolidays'
import getRunicDays from './getRunicDays'
import SpecialDayType from './types/SpecialDayType'

const { PublicHoliday, Celebration, Runic } = SpecialDayType

function getSpecialDays(year: number = new Date().getFullYear(), types = [PublicHoliday, Celebration]): ISpecialDay[] {
  const specialDays: ISpecialDay[] = [
    ...(types.includes(PublicHoliday) ? getPublicHolidays(year) : []),
    ...(types.includes(Celebration) ? getCelebrationDays(year) : []),
    ...(types.includes(Runic) ? getRunicDays(year) : []),
  ]

  return specialDays.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
}

export default getSpecialDays
