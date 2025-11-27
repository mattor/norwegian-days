import type { DateString } from './DateString'
import type { SpecialDayType } from './SpecialDayType'

export interface SpecialDay {
  date: DateString
  id: string
  name: string
  type: SpecialDayType
}
