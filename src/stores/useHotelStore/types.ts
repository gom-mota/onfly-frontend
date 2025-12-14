// Types
import type { IPaginatedListRequest, IPaginatedListResponse } from '@/types/request'
import type { IHotelData, IHotelFilters } from '@/types/hotel'

export interface IHotelStore {
  params: IPaginatedListRequest<IHotelFilters>
  setParams: (params: Partial<IPaginatedListRequest<IHotelFilters>>) => void
  list: IPaginatedListResponse<IHotelData>
  setList: (data: IPaginatedListResponse<IHotelData>) => void
}
