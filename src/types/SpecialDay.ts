import type { DateString } from './DateString.js'
import type { SpecialDayType } from './SpecialDayType.js'

export interface SpecialDay {
  date: DateString
  id: string
  name: string
  type: SpecialDayType
}
