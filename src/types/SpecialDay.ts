import type { SpecialDayType } from './SpecialDayType'

export interface SpecialDay {
  date: Date
  id: string
  name: string
  type: SpecialDayType
}
