import getCelebrationDays from "./getCelebrationDays"
import getPublicHolidays from "./getPublicHolidays"
import getRunicDays from "./getRunicDays"
import ISpecialDay from "./types/ISpecialDay"
import SpecialDayType from "./types/SpecialDayType"

const { PublicHoliday, Celebration, Runic } = SpecialDayType

const getSpecialDays = (
    year: number = new Date().getFullYear(),
    types = [PublicHoliday, Celebration],
): ISpecialDay[] => {
    const specialDays: ISpecialDay[] = [
        ...(types.indexOf(PublicHoliday) !== -1 ? getPublicHolidays(year) : []),
        ...(types.indexOf(Celebration) !== -1 ? getCelebrationDays(year) : []),
        ...(types.indexOf(Runic) !== -1 ? getRunicDays(year) : []),
    ]

    return specialDays.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
}

export default getSpecialDays
