import { expect, it } from 'vitest'
import { getNthWeekdayInMonth, Weekday } from '../../../src'

it('should return the first Sunday in January 2024', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Sunday, 0, 2024)
  expect(result).toBe('2024-01-07')
})

it('should return the second Sunday in January 2024', () => {
  const result = getNthWeekdayInMonth(2, Weekday.Sunday, 0, 2024)
  expect(result).toBe('2024-01-14')
})

it('should return the first Monday in February 2024', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Monday, 1, 2024)
  expect(result).toBe('2024-02-05')
})

it('should return the second Saturday in May 2024', () => {
  const result = getNthWeekdayInMonth(2, Weekday.Saturday, 4, 2024)
  expect(result).toBe('2024-05-11')
})

it('should return the first Wednesday in September 2024', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Wednesday, 8, 2024)
  expect(result).toBe('2024-09-04')
})

it('should return the fourth Thursday in October 2024', () => {
  const result = getNthWeekdayInMonth(4, Weekday.Thursday, 9, 2024)
  expect(result).toBe('2024-10-24')
})

it('should return the second Friday in September 2024', () => {
  const result = getNthWeekdayInMonth(2, Weekday.Friday, 8, 2024)
  expect(result).toBe('2024-09-13')
})

it('should handle leap year February correctly', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Tuesday, 1, 2024)
  expect(result).toBe('2024-02-06')
})

it('should handle nth 0 by returning invalid date', () => {
  const result = getNthWeekdayInMonth(0, Weekday.Sunday, 0, 2024)
  expect(result).toBe('1899-12-31')
})

it('should handle nth larger than available weekdays in month', () => {
  const result = getNthWeekdayInMonth(10, Weekday.Sunday, 0, 2024)
  expect(result).toBe('2024-01-30')
})

it('should handle invalid weekday (negative)', () => {
  const result = getNthWeekdayInMonth(1, -1, 0, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle invalid weekday (> 6)', () => {
  const result = getNthWeekdayInMonth(1, 7, 0, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle invalid month (negative)', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Sunday, -1, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle invalid month (> 11)', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Sunday, 12, 2024)
  expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

it('should handle negative year', () => {
  const result = getNthWeekdayInMonth(1, Weekday.Sunday, 0, -1)
  expect(result).toMatch(/^-?\d+-?\d{2}-\d{2}$/)
})
