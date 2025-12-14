// Services
import { requestClientWithFormat } from '@/services/requestClient'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Types
import type { IHotelData } from '@/types/hotel'
import type { IRequestClientOptions } from '@/types/request'

const useHotels = () => {
  const store = useHotelStore()

  const handleGetHotelList = async () => {
    const { params } = store
    const { filters, ...listParams } = params

    const requestOptions: IRequestClientOptions = {
      method: 'get',
      url: '/hotels',
      params: {
        placeId: filters?.placeId,
        name_like: filters?.name,
        _sort: listParams.sort,
        _order: listParams.order,
        _page: listParams.page,
        _limit: listParams.limit,
      },
    }

    try {
      const response = await requestClientWithFormat<IHotelData>('paginatedList', requestOptions)

      if (response) store.setList(response.data)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return { handleGetHotelList }
}

export default useHotels
