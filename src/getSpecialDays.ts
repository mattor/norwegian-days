import getEasterSunday from "./helpers/getEasterSunday";
import getNthLastWeekdayInMonth from "./helpers/getNthLastWeekdayInMonth";
import getNthWeekdayInMonth from "./helpers/getNthWeekdayInMonth";
import ISpecialDay from "./types/ISpecialDay";
import SpecialDayType from "./types/SpecialDayType";
import Weekday from "./types/Weekday";

const getSpecialDays = (year?: number): ISpecialDay[] => {
    year = year !== undefined ? year : new Date().getFullYear();
    const { PublicHoliday, Celebration } = SpecialDayType;
    const easter = getEasterSunday(year);

    const specialDays: ISpecialDay[] = [
        {
            date: new Date(year, 0, 1),
            name: "Første nyttårsdag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, 0, 17),
            name: "Grisens dag",
            type: Celebration,
        },
        {
            date: new Date(year, 1, 6),
            name: "Samefolkets dag",
            type: Celebration,
        },
        {
            date: new Date(year, 1, 14),
            name: "Valentinsdag",
            type: Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Sunday, 1, year),
            name: "Morsdag",
            type: Celebration,
        },
        {
            date: new Date(year, 2, 6),
            name: "Fiskens dag",
            type: Celebration,
        },
        {
            date: new Date(year, 2, 22),
            name: "Verdens vanndag",
            type: Celebration,
        },
        {
            date: new Date(year, 2, 25),
            name: "Den store vaffeldagen",
            type: Celebration,
        },
        {
            date: new Date(year, 3, 8),
            name: "Kakedagen",
            type: Celebration,
        },
        {
            date: new Date(year, 3, 22),
            name: "Jordens dag (Earth Day)",
            type: Celebration,
        },
        {
            date: new Date(year, easter.month, easter.day - 7),
            name: "Palmesøndag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day - 5),
            name: "Feitetirsdag",
            type: Celebration,
        },
        {
            date: new Date(year, easter.month, easter.day - 5),
            name: "Pannekakedagen",
            type: Celebration,
        },
        {
            date: new Date(year, easter.month, easter.day - 3),
            name: "Skjærtorsdag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day - 2),
            name: "Langfredag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day),
            name: "Første påskedag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 1),
            name: "Andre påskedag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 39),
            name: "Kristi himmelfartsdag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, 4, 1),
            name: "Offentlig høytidsdag (1. mai)",
            type: PublicHoliday,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Saturday, 4, year),
            name: "Årets første grilldag",
            type: Celebration,
        },
        {
            date: new Date(year, 4, 17),
            name: "Grunnlovsdag (17. mai)",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 49),
            name: "Første pinsedag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, easter.month, easter.day + 50),
            name: "Andre pinsedag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, 5, 1),
            name: "Verdens melkedag",
            type: Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Saturday, 5, year),
            name: "Sjømatens dag",
            type: Celebration,
        },
        {
            date: new Date(year, 5, 23),
            name: "Sankthans",
            type: Celebration,
        },
        {
            date: new Date(year, 6, 29),
            name: "Olsok",
            type: Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Tuesday, 8, year),
            name: "Den norske epledagen",
            type: Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Wednesday, 8, year),
            name: "Verdens skolemelkdag",
            type: Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Thursday, 8, year),
            name: "Fårikålens festdag",
            type: Celebration,
        },
        {
            date: getNthWeekdayInMonth(1, Weekday.Wednesday, 9, year),
            name: "Lutefisksesongen starter",
            type: Celebration,
        },
        {
            date: new Date(year, 9, 4),
            name: "Kanelbollens dag",
            type: Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Friday, 9, year),
            name: "Verdens eggdag",
            type: Celebration,
        },
        {
            date: new Date(year, 9, 16),
            name: "Verdens matvaredag",
            type: Celebration,
        },
        {
            date: new Date(year, 9, 16),
            name: "Verdens brøddag",
            type: Celebration,
        },
        {
            date: new Date(year, 9, 23),
            name: "Grøtdagen",
            type: Celebration,
        },
        {
            date: new Date(year, 9, 31),
            name: "Halloween",
            type: Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Friday, 9, year),
            name: "Ostens dag",
            type: Celebration,
        },
        {
            date: new Date(year, 10, 11),
            name: "Mortensmesse",
            type: Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Sunday, 10, year),
            name: "Farsdag",
            type: Celebration,
        },
        {
            date: getNthWeekdayInMonth(4, Weekday.Thursday, 10, year),
            name: "Thanksgiving",
            type: Celebration,
        },
        {
            date: new Date(year, 11, 13),
            name: "Luciadagen",
            type: Celebration,
        },
        {
            date: new Date(year, 11, 24),
            name: "Julaften",
            type: PublicHoliday,
        },
        {
            date: new Date(year, 11, 25),
            name: "Første juledag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, 11, 26),
            name: "Andre juledag",
            type: PublicHoliday,
        },
        {
            date: new Date(year, 11, 31),
            name: "Nyttårsaften",
            type: PublicHoliday,
        },
    ];

    return specialDays.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
};

export default getSpecialDays;
