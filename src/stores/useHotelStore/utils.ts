// Types
import type { IHotelStore } from './types'

export const INITIAL_LIST: IHotelStore['list'] = {
  data: [],
  count: 0,
  limit: 10,
  page: 1,
  totalPages: 0,
}

export const INITIAL_PARAMS: IHotelStore['params'] = {
  page: 1,
  limit: 10,
  sort: 'totalPrice',
  order: 'desc',
  filters: { name: undefined, placeId: undefined },
}
