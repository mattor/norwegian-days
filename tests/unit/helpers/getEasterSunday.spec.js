import { expect, it } from 'vitest'
import { getEasterSunday } from '../../../src'

it('should return correct Easter Sunday for 2024', () => {
  const result = getEasterSunday(2024)
  expect(result.day).toBe(31)
  expect(result.month).toBe(3)
})

it('should return correct Easter Sunday for 2025', () => {
  const result = getEasterSunday(2025)
  expect(result.day).toBe(20)
  expect(result.month).toBe(4)
})

it('should return correct Easter Sunday for 2026', () => {
  const result = getEasterSunday(2026)
  expect(result.day).toBe(5)
  expect(result.month).toBe(4)
})

it('should return correct Easter Sunday for 2023', () => {
  const result = getEasterSunday(2023)
  expect(result.day).toBe(9)
  expect(result.month).toBe(4)
})

it('should return correct Easter Sunday for 2000', () => {
  const result = getEasterSunday(2000)
  expect(result.day).toBe(23)
  expect(result.month).toBe(4)
})

it('should return correct Easter Sunday for 1900', () => {
  const result = getEasterSunday(1900)
  expect(result.day).toBe(15)
  expect(result.month).toBe(4)
})

it('should handle year 0', () => {
  const result = getEasterSunday(0)
  expect(result.day).toBeGreaterThan(0)
  expect(result.month).toBeGreaterThanOrEqual(3)
  expect(result.month).toBeLessThanOrEqual(4)
})

it('should handle negative year', () => {
  const result = getEasterSunday(-1)
  expect(result.day).toBeGreaterThan(0)
  expect(result.month).toBeGreaterThanOrEqual(3)
  expect(result.month).toBeLessThanOrEqual(4)
})

it('should handle very large year', () => {
  const result = getEasterSunday(9999)
  expect(result.day).toBeGreaterThan(0)
  expect(result.month).toBeGreaterThanOrEqual(3)
  expect(result.month).toBeLessThanOrEqual(4)
})

it('should return valid month range (3-4)', () => {
  const result = getEasterSunday(2024)
  expect(result.month).toBeGreaterThanOrEqual(3)
  expect(result.month).toBeLessThanOrEqual(4)
})

it('should return valid day range', () => {
  const result = getEasterSunday(2024)
  expect(result.day).toBeGreaterThan(0)
  expect(result.day).toBeLessThanOrEqual(31)
})
