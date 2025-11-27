import { expect, it } from 'vitest'
import { getSpecialDays } from '../../src'

it('should return an array', () => {
  const result = getSpecialDays()
  expect(Array.isArray(result)).toBe(true)
})

it('should use current year as default when no year is provided', () => {
  const currentYear = new Date().getFullYear()
  const result = getSpecialDays()
  expect(result.length).toBeGreaterThan(0)
  result.forEach((day) => {
    expect(day.date.startsWith(String(currentYear))).toBe(true)
  })
})

it('should accept a year parameter', () => {
  const result = getSpecialDays(2024)
  expect(result.length).toBeGreaterThan(0)
  result.forEach((day) => {
    expect(day.date.startsWith('2024')).toBe(true)
  })
})

it('should use default types when no types are provided', () => {
  const result = getSpecialDays(2024)
  const hasPublicHoliday = result.some(day => day.type === 'public-holiday')
  const hasCelebration = result.some(day => day.type === 'celebration')
  expect(hasPublicHoliday).toBe(true)
  expect(hasCelebration).toBe(true)
})

it('should filter by public-holiday type only', () => {
  const result = getSpecialDays(2024, ['public-holiday'])
  expect(result.length).toBeGreaterThan(0)
  result.forEach((day) => {
    expect(day.type).toBe('public-holiday')
  })
})

it('should filter by celebration type only', () => {
  const result = getSpecialDays(2024, ['celebration'])
  expect(result.length).toBeGreaterThan(0)
  result.forEach((day) => {
    expect(day.type).toBe('celebration')
  })
})

it('should filter by runic type only', () => {
  const result = getSpecialDays(2024, ['runic'])
  expect(result.length).toBeGreaterThan(0)
  result.forEach((day) => {
    expect(day.type).toBe('runic')
  })
})

it('should filter by multiple types', () => {
  const result = getSpecialDays(2024, ['public-holiday', 'runic'])
  expect(result.length).toBeGreaterThan(0)
  const types = new Set(result.map(day => day.type))
  expect(types.has('public-holiday')).toBe(true)
  expect(types.has('runic')).toBe(true)
  expect(types.has('celebration')).toBe(false)
})

it('should return empty array when types array is empty', () => {
  const result = getSpecialDays(2024, [])
  expect(result).toEqual([])
})

it('should return all types when all types are specified', () => {
  const result = getSpecialDays(2024, ['public-holiday', 'celebration', 'runic'])
  expect(result.length).toBeGreaterThan(0)
  const types = new Set(result.map(day => day.type))
  expect(types.has('public-holiday')).toBe(true)
  expect(types.has('celebration')).toBe(true)
  expect(types.has('runic')).toBe(true)
})

it('should return sorted results by date', () => {
  const result = getSpecialDays(2024)
  for (let i = 1; i < result.length; i++) {
    expect(result[i - 1].date <= result[i].date).toBe(true)
  }
})

it('should return objects with required properties', () => {
  const result = getSpecialDays(2024)
  if (result.length > 0) {
    const day = result[0]
    expect(day).toHaveProperty('date')
    expect(day).toHaveProperty('name')
    expect(day).toHaveProperty('type')
    expect(day).toHaveProperty('id')
    expect(typeof day.date).toBe('string')
    expect(typeof day.name).toBe('string')
    expect(typeof day.type).toBe('string')
    expect(typeof day.id).toBe('string')
  }
})

it('should handle invalid type filters gracefully', () => {
  const result = getSpecialDays(2024, ['invalid-type'])
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(0)
})

it('should combine year and types parameters correctly', () => {
  const result2024 = getSpecialDays(2024, ['public-holiday'])
  const result2025 = getSpecialDays(2025, ['public-holiday'])
  expect(result2024.length).toBeGreaterThan(0)
  expect(result2025.length).toBeGreaterThan(0)
  result2024.forEach((day) => {
    expect(day.date.startsWith('2024')).toBe(true)
  })
  result2025.forEach((day) => {
    expect(day.date.startsWith('2025')).toBe(true)
  })
})
