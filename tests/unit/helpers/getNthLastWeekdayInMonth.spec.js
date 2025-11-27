import { expect, it } from 'vitest'
import { getNthLastWeekdayInMonth, Weekday } from '../../../src'

it('should return the last Tuesday in August 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Tuesday, 7, 2024)
  expect(result).toBe('2024-08-27')
})

it('should return the last Wednesday in August 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Wednesday, 7, 2024)
  expect(result).toBe('2024-08-28')
})

it('should return the last Thursday in August 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Thursday, 7, 2024)
  expect(result).toBe('2024-08-29')
})

it('should return the last Friday in September 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Friday, 8, 2024)
  expect(result).toBe('2024-09-27')
})

it('should return the last Sunday in January 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Sunday, 0, 2024)
  expect(result).toBe('2024-01-28')
})

it('should return the last Monday in February 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Monday, 1, 2024)
  expect(result).toBe('2024-02-26')
})

it('should handle leap year February correctly', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Saturday, 1, 2024)
  expect(result).toBe('2024-02-24')
})

it('should return the last Saturday in December 2024', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Saturday, 11, 2024)
  expect(result).toBe('2024-12-28')
})

it('should handle nth 0 by returning invalid date', () => {
  const result = getNthLastWeekdayInMonth(0, Weekday.Sunday, 0, 2024)
  expect(result).toBe('1899-12-31')
})

it('should handle nth larger than available weekdays in month', () => {
  const result = getNthLastWeekdayInMonth(10, Weekday.Sunday, 0, 2024)
  expect(result).toBe('2024-01-01')
})

it('should handle invalid weekday (negative)', () => {
  const result = getNthLastWeekdayInMonth(1, -1, 0, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle invalid weekday (> 6)', () => {
  const result = getNthLastWeekdayInMonth(1, 7, 0, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle invalid month (negative)', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Sunday, -1, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle invalid month (> 11)', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Sunday, 12, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle negative year', () => {
  const result = getNthLastWeekdayInMonth(1, Weekday.Sunday, 0, -1)
  expect(result).toMatch(/^-?\d+-?\d{2}-\d{2}$/)
})
