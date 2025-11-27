import { expect, it } from 'vitest'
import { getDateString } from '../../../src'
import { getFirstSundayOfAdvent } from '../../../src/helpers/getFirstSundayOfAdvent'

it('should return an object with day and month properties', () => {
  const result = getFirstSundayOfAdvent(2024)
  expect(result).toHaveProperty('day')
  expect(result).toHaveProperty('month')
  expect(typeof result.day).toBe('number')
  expect(typeof result.month).toBe('number')
})

it('should return month 11 or 12 (November or December)', () => {
  const result = getFirstSundayOfAdvent(2024)
  expect(result.month).toBeGreaterThanOrEqual(11)
  expect(result.month).toBeLessThanOrEqual(12)
})

it('should return valid day number', () => {
  const result = getFirstSundayOfAdvent(2024)
  expect(result.day).toBeGreaterThan(0)
  expect(result.day).toBeLessThanOrEqual(31)
})

it('should accept year parameter', () => {
  const result2024 = getFirstSundayOfAdvent(2024)
  const result2025 = getFirstSundayOfAdvent(2025)
  expect(result2024).toHaveProperty('day')
  expect(result2024).toHaveProperty('month')
  expect(result2025).toHaveProperty('day')
  expect(result2025).toHaveProperty('month')
})

it('should return first Sunday of Advent for 2025 (November 30)', () => {
  const result = getFirstSundayOfAdvent(2025)
  expect(result.day).toBe(30)
  expect(result.month).toBe(11)
  const dateString = getDateString(result.day, result.month, 2025)
  expect(dateString).toBe('2025-11-30')
})

it('should return first Sunday of Advent for 2022 (November 27)', () => {
  const result = getFirstSundayOfAdvent(2022)
  const dateString = getDateString(result.day, result.month, 2022)
  expect(dateString).toBe('2022-11-27')
})

it('should return first Sunday of Advent for 2023 (December 3)', () => {
  const result = getFirstSundayOfAdvent(2023)
  const dateString = getDateString(result.day, result.month, 2023)
  expect(dateString).toBe('2023-12-03')
})

it('should return first Sunday of Advent for 2024 (December 1)', () => {
  const result = getFirstSundayOfAdvent(2024)
  const dateString = getDateString(result.day, result.month, 2024)
  expect(dateString).toBe('2024-12-01')
})

it('should return first Sunday of Advent for 2026 (November 29)', () => {
  const result = getFirstSundayOfAdvent(2026)
  const dateString = getDateString(result.day, result.month, 2026)
  expect(dateString).toBe('2026-11-29')
})

it('should handle year 0', () => {
  const result = getFirstSundayOfAdvent(0)
  expect(result.day).toBeGreaterThan(0)
  expect(result.month).toBeGreaterThanOrEqual(11)
  expect(result.month).toBeLessThanOrEqual(12)
})

it('should handle negative year', () => {
  const result = getFirstSundayOfAdvent(-1)
  expect(result.day).toBeGreaterThan(0)
  expect(result.month).toBeGreaterThanOrEqual(11)
  expect(result.month).toBeLessThanOrEqual(12)
})

it('should handle very large year', () => {
  const result = getFirstSundayOfAdvent(9999)
  expect(result.day).toBeGreaterThan(0)
  expect(result.month).toBeGreaterThanOrEqual(11)
  expect(result.month).toBeLessThanOrEqual(12)
})
