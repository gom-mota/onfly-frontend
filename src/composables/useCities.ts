// Packages
import { ref } from 'vue'

// Services
import requestClient from '@/services/requestClient'

// Types
import type { ILoadingStatus } from '@/types/request'
import type { ICityData } from '@/types/city'

const useCities = () => {
  const loadingStatus = ref<ILoadingStatus>(undefined)

  const handleGetCitiesList = async (name: string) => {
    loadingStatus.value = 'loading'

    try {
      const response = await requestClient<ICityData[]>({
        method: 'get',
        url: '/cities',
        params: { name_like: name },
      })

      loadingStatus.value = 'success'

      return response
    } catch (error) {
      loadingStatus.value = 'error'

      throw { error, customMessage: 'Erro ao carregar destinos' }
    }
  }

  return { handleGetCitiesList, loadingStatus }
}

export default useCities
