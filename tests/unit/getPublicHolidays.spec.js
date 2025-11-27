import { expect, it } from 'vitest'
import { getPublicHolidays, PublicHolidayId } from '../../src'

it('should return the correct public holidays with Easter-based dates', () => {
  const specialDaysOf1977 = getPublicHolidays(1977)

  const palmSunday = specialDaysOf1977.find(day => day.id === PublicHolidayId.PalmSunday)
  expect(palmSunday.date).toEqual('1977-04-03')

  const maundyThursday = specialDaysOf1977.find(day => day.id === PublicHolidayId.MaundyThursday)
  expect(maundyThursday.date).toEqual('1977-04-07')

  const goodFriday = specialDaysOf1977.find(day => day.id === PublicHolidayId.GoodFriday)
  expect(goodFriday.date).toEqual('1977-04-08')

  const easterSunday = specialDaysOf1977.find(day => day.id === PublicHolidayId.EasterSunday)
  expect(easterSunday.date).toEqual('1977-04-10')

  const easterMonday = specialDaysOf1977.find(day => day.id === PublicHolidayId.EasterMonday)
  expect(easterMonday.date).toEqual('1977-04-11')

  const ascensionDay = specialDaysOf1977.find(day => day.id === PublicHolidayId.AscensionDay)
  expect(ascensionDay.date).toEqual('1977-05-19')

  const whitSunday = specialDaysOf1977.find(day => day.id === PublicHolidayId.WhitSunday)
  expect(whitSunday.date).toEqual('1977-05-29')

  const whitMonday = specialDaysOf1977.find(day => day.id === PublicHolidayId.WhitMonday)
  expect(whitMonday.date).toEqual('1977-05-30')
})
