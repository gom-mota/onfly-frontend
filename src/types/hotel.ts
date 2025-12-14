export interface IHotelData {
  id: string
  name: string
  stars: number
  totalPrice: number
  dailyPrice: number
  tax: number
  thumb: string
  amenities: string[]
  hasBreakFast: boolean
  hasRefundableRoom: boolean
  district: string
  placeId: string
}

export interface IHotelFilters {
  placeId?: string
  name?: string
}
