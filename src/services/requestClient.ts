// Types
import type {
  IPaginatedListResponse,
  IRequestClientFormat,
  IRequestClientOptions,
  IRequestClientResponse,
} from '@/types/request'

const BASE_URL = 'http://localhost:3000'

const responseFormat = <IData>(
  options: IRequestClientOptions,
  response: IRequestClientResponse<IData>,
) => {
  const { params } = options

  const paginatedList = (): IRequestClientResponse<IPaginatedListResponse<IData>> => {
    const page = Number(params?._page ?? 1)
    const limit = Number(params?._limit ?? 5)
    const count = Number(response.headers?.['x-total-count'] ?? 0)
    const totalPages = Math.ceil(count / limit)

    return {
      status: response.status,
      headers: response.headers,
      data: {
        data: response.data as IData[],
        count,
        limit,
        page,
        totalPages,
      },
    }
  }

  return { paginatedList: paginatedList() }
}

const requestClient = async <IData>(
  options: IRequestClientOptions,
): Promise<IRequestClientResponse<IData>> => {
  const { method, url, params } = options

  const validParams = Object.entries(params ?? {}).filter(
    ([, value]) => value != null && value !== '',
  )

  const formattedParams = validParams.map(([key, value]) => [key, String(value)])
  const queryString = formattedParams.length ? new URLSearchParams(formattedParams).toString() : ''

  const endpoint = queryString ? `${BASE_URL}${url}?${queryString}` : `${BASE_URL}${url}`

  const response: Response = await fetch(endpoint, { method: method.toUpperCase() })

  if (!response.ok) throw new Error(`Request failed: ${response.status}`)

  return {
    data: await response.json(),
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
  }
}

const requestClientWithFormat = async <IData>(
  format: IRequestClientFormat,
  options: IRequestClientOptions,
) => {
  const response = await requestClient<IData>(options)

  return responseFormat<IData>(options, response)[format] || response
}

export default requestClient

export { requestClientWithFormat }
