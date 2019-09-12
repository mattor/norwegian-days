import getEasterSunday from "./helpers/getEasterSunday";
import getNthLastWeekdayInMonth from "./helpers/getNthLastWeekdayInMonth";
import getNthWeekdayInMonth from "./helpers/getNthWeekdayInMonth";
import ISpecialDay from "./types/ISpecialDay";
import SpecialDayType from "./types/SpecialDayType";
import Weekday from "./types/Weekday";

const getCelebrationDays = (year: number = new Date().getFullYear()): ISpecialDay[] => {
    const easter = getEasterSunday(year);

    return [
        {
            date: new Date(year, 0, 17),
            name: "Grisens dag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 1, 6),
            name: "Samefolkets dag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 1, 14),
            name: "Valentinsdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Sunday, 1, year),
            name: "Morsdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 2, 6),
            name: "Fiskens dag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 2, 22),
            name: "Verdens vanndag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 2, 25),
            name: "Den store vaffeldagen",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 3, 8),
            name: "Kakedagen",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 3, 22),
            name: "Jordens dag (Earth Day)",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, easter.month, easter.day - 5),
            name: "Feitetirsdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, easter.month, easter.day - 5),
            name: "Pannekakedagen",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Saturday, 4, year),
            name: "Årets første grilldag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 5, 1),
            name: "Verdens melkedag",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Saturday, 5, year),
            name: "Sjømatens dag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 5, 23),
            name: "Sankthans",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 6, 29),
            name: "Olsok",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Tuesday, 8, year),
            name: "Den norske epledagen",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Wednesday, 8, year),
            name: "Verdens skolemelkdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Thursday, 8, year),
            name: "Fårikålens festdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(1, Weekday.Wednesday, 9, year),
            name: "Lutefisksesongen starter",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 9, 4),
            name: "Kanelbollens dag",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Friday, 9, year),
            name: "Verdens eggdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 9, 16),
            name: "Verdens matvaredag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 9, 16),
            name: "Verdens brøddag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 9, 23),
            name: "Grøtdagen",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 9, 31),
            name: "Halloween",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthLastWeekdayInMonth(1, Weekday.Friday, 9, year),
            name: "Ostens dag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 10, 11),
            name: "Mortensmesse",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Sunday, 10, year),
            name: "Farsdag",
            type: SpecialDayType.Celebration,
        },
        {
            date: getNthWeekdayInMonth(4, Weekday.Thursday, 10, year),
            name: "Thanksgiving",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 11, 13),
            name: "Luciadagen",
            type: SpecialDayType.Celebration,
        },
    ];
};

export default getCelebrationDays;
