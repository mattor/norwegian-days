import Weekday from "../types/Weekday"

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

export default getNthWeekdayInMonth;