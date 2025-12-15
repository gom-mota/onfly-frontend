export type IHotelAmenities = 'pool' | 'restaurant' | 'accessibility' | 'parking' | 'wifi' | 'air'

export interface IHotelData {
  id: string
  name: string
  stars: number
  totalPrice: number
  dailyPrice: number
  tax: number
  thumb: string
  amenities: IHotelAmenities[]
  hasBreakFast: boolean
  hasRefundableRoom: boolean
  district: string
  placeId: string
}

export interface IHotelFilters {
  placeId?: string
  name?: string
}
