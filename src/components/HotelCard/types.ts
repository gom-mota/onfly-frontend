// Types
import type { IHotelAmenities } from '@/types/hotel'

export interface IHotelCardProps {
  name: string
  place: string
  thumbSrc: string
  amenities: IHotelAmenities[]
  dailyPrice: number
  totalPrice: number
  taxes: number
  hasBreakFast: boolean
  hasRefundableRoom: boolean
  stars: string
}

export interface IHotelCardEmits {
  (event: 'click-details'): void
}
