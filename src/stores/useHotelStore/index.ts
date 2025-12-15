// Packages
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

// Types
import type { IHotelStore } from './types'

// Utils
import { INITIAL_LIST, INITIAL_PARAMS } from './utils'

const useHotelStore = defineStore('hotel', () => {
  const params = reactive<IHotelStore['params']>(INITIAL_PARAMS)
  const list = ref<IHotelStore['list']>(INITIAL_LIST)

  const selectedHotel = ref<IHotelStore['selectedHotel']>(undefined)

  const setParams = (newParams: Partial<IHotelStore['params']>) => {
    Object.assign(params, newParams)
  }

  const setList = (data: IHotelStore['list']) => {
    list.value = data
  }

  const setSelectedHotel = (data: IHotelStore['selectedHotel']) => {
    selectedHotel.value = data
  }

  return { params, setParams, list, setList, selectedHotel, setSelectedHotel }
})

export default useHotelStore
