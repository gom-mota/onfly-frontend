export type IHotelAmenities =
  | 'WI_FI'
  | 'PARKING'
  | 'POOL'
  | 'RESTAURANT'
  | 'ROOM_SERVICE'
  | 'FITNESS_CENTER'
  | 'STEAM_ROOM'
  | 'PET_FRIENDLY'
  | 'BAR'
  | 'SPA'

export interface IHotelData {
  id: string
  name: string
  stars: string
  totalPrice: number
  dailyPrice: number
  tax: number
  thumb: string
  amenities: IHotelAmenities[]
  hasBreakFast: boolean
  hasRefundableRoom: boolean
  district: string
  placeId: number
}

export interface IHotelFilters {
  placeId?: string
  name?: string
}

export interface IHotelDetailsData {
  id: number
  name: string
  description: string
  stars: string
  amenities: { key: string; label: string }[]
  hasBreakFast: boolean
  hasRefundableRoom: boolean
  fullAddress: string
  images: string[]
}
