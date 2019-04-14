export interface ISpecialDay {
    name: string;
    date: Date;
    type: SpecialDayType;
}

export enum SpecialDayType {
    PublicHoliday = "PUBLIC-HOLIDAY",
    Celebration = "CELEBRATION",
}

enum Weekday {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}

const getEasterSunday = (year: number) => {
    const c = Math.floor(year / 100);
    const n = year - 19 * Math.floor(year / 19);
    const k = Math.floor((c - 17) / 25);
    let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15;
    i = i - 30 * Math.floor((i / 30));
    i = i - Math.floor(i / 28) * (1 - Math.floor(i / 28) * Math.floor(29 / (i + 1)) * Math.floor((21 - n) / 11));
    let J = year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4);
    J = J - 7 * Math.floor(J / 7);
    const l = i - J;
    const m = 3 + Math.floor((l + 40) / 44);
    const d = l + 28 - 31 * Math.floor(m / 4);

    return {
        day: d,
        month: m - 1,
    };
};

const getNthWeekdayInMonth = (nth: number, day: Weekday, m: number, y: number): Date => {
    let targetDay = new Date(0, 0, 0);
    let curDay = 0;
    let i = 1;

    while (curDay < nth && i < 31) {
        targetDay = new Date(y, m, i++);
        if (targetDay.getDay() === day) {
            curDay++;
        }
    }

    return targetDay;
};

const getNthLastWeekdayInMonth = (nth: number, day: Weekday, m: number, y: number): Date => {
    let targetDay = new Date(0, 0, 0);
    let curDay = 0;
    let i = new Date(y, m + 1, 0).getDate();

    while (curDay < nth && i >= 1) {
        targetDay = new Date(y, m, i--);
        if (targetDay.getDay() === day) {
            curDay++;
        }
    }

    return targetDay;
};

export default (year?: number): ISpecialDay[] => {
    year = year !== undefined ? year : new Date().getFullYear()
    const easter = getEasterSunday(year);

    const specialDays: ISpecialDay[] = [
        {
            date: new Date(year, 0, 1),
            name: "Første nyttårsdag",
            type: SpecialDayType.PublicHoliday,
        },
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
            date: new Date(year, easter.month, easter.day - 7),
            name: "Palmesøndag",
            type: SpecialDayType.PublicHoliday,
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
            name: "Offentlig høytidsdag",
            type: SpecialDayType.PublicHoliday,
        },
        {
            date: getNthWeekdayInMonth(2, Weekday.Saturday, 4, year),
            name: "Årets første grilldag",
            type: SpecialDayType.Celebration,
        },
        {
            date: new Date(year, 4, 17),
            name: "Grunnlovsdag",
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
            name: "Fårikålens Festdag",
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

    return specialDays.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
};
