export type IRequestMethod = 'get'

export type IOrder = 'asc' | 'desc'

export type IRequestClientFormat = 'paginatedList'

export interface IPaginatedListRequest<IFilter> {
  filters?: IFilter
  page: number
  limit: number
  sort?: string
  order?: IOrder
}

export interface IPaginatedListResponse<IData> {
  data: IData[]
  count: number
  limit: number
  page: number
  totalPages: number
}

export interface IRequestClientOptions {
  method: IRequestMethod
  url: string
  params?: Record<string, unknown>
}

export interface IRequestClientResponse<IData> {
  data: IData
  status: number
  headers: Record<string, string>
}
