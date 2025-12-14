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

  const setParams = (newParams: Partial<IHotelStore['params']>) => {
    Object.assign(params, newParams)
  }

  const setList = (data: IHotelStore['list']) => {
    list.value = data
  }

  return { params, setParams, list, setList }
})

export default useHotelStore
