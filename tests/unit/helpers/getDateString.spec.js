import { expect, it } from 'vitest'
import { getDateString } from '../../../src'

it('should return the correct date string', () => {
  expect(getDateString(3, 9, 1977)).toEqual('1977-09-03')
})

it('should return the correct date string for a leap year', () => {
  expect(getDateString(29, 2, 2024)).toEqual('2024-02-29')
})

it('should return the correct date string for a non-leap year', () => {
  expect(getDateString(29, 2, 2025)).toEqual('2025-03-01')
})

it('should handle day 0 by wrapping to previous month', () => {
  expect(getDateString(0, 1, 2024)).toEqual('2023-12-31')
})

it('should handle day 32 by wrapping to next month', () => {
  expect(getDateString(32, 1, 2024)).toEqual('2024-02-01')
})

it('should handle month 0 by wrapping to previous year', () => {
  expect(getDateString(1, 0, 2024)).toEqual('2023-12-01')
})

it('should handle month 13 by wrapping to next year', () => {
  expect(getDateString(1, 13, 2024)).toEqual('2025-01-01')
})

it('should handle negative year', () => {
  expect(getDateString(1, 1, -1)).toEqual('-000001-01-01')
})

it('should handle very large day number', () => {
  expect(getDateString(100, 1, 2024)).toEqual('2024-04-09')
})
