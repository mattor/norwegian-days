import getEasterSunday from "./helpers/getEasterSunday";
import ISpecialDay from "./types/ISpecialDay";
import SpecialDayType from "./types/SpecialDayType";

const getPublicHolidays = (year: number = new Date().getFullYear()): ISpecialDay[] => {
    const easter = getEasterSunday(year);

    return [
        {
            date: new Date(year, 0, 1),
            name: "Første nyttårsdag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day - 7),
            name: "Palmesøndag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day - 3),
            name: "Skjærtorsdag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day - 2),
            name: "Langfredag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day),
            name: "Første påskedag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 1),
            name: "Andre påskedag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 39),
            name: "Kristi himmelfartsdag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, 4, 1),
            name: "Offentlig høytidsdag (1. mai)",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, 4, 17),
            name: "Grunnlovsdag (17. mai)",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 49),
            name: "Første pinsedag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 50),
            name: "Andre pinsedag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, 11, 24),
            name: "Julaften",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, 11, 25),
            name: "Første juledag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, 11, 26),
            name: "Andre juledag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: new Date(year, 11, 31),
            name: "Nyttårsaften",
            type: SpecialDayType.PublicHoliday,
        },
    ];
};

export default getPublicHolidays;
