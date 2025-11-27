import { expect, it } from 'vitest'
import { getRunicDays, RunicDayId } from '../../src'

it('should return the correct runic days', () => {
  const specialDaysOf1977 = getRunicDays(1977)

  const eighthDay = specialDaysOf1977.find(day => day.id === RunicDayId.EighthDay)
  expect(eighthDay.date).toEqual('1977-01-01')

  const epiphany = specialDaysOf1977.find(day => day.id === RunicDayId.Epiphany)
  expect(epiphany.date).toEqual('1977-01-06')

  const eldbjorgDay = specialDaysOf1977.find(day => day.id === RunicDayId.EldbjorgDay)
  expect(eldbjorgDay.date).toEqual('1977-01-07')
})
