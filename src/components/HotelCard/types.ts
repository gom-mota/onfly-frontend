// Types
import type { IHotelAmenities } from '@/types/hotel'

export interface IHotelCard {
  name: string
  place: string
  thumbSrc: string
  amenities: IHotelAmenities[]
  dailyPrice: number
  totalPrice: number
  hasBreakFast: boolean
  hasRefundableRoom: boolean
  stars: number
}
