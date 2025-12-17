// Packages
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'

// Components
import ListPaginated from '@/views/HotelView/items/ListPaginated/ListPaginated.vue'

// Mocks
import { mockEmptyList, mockHotelListData, mockList } from './mocks'

// Stores
import useHotelStore from '@/stores/useHotelStore'

describe('ListPaginated Tests', () => {
  it('hotel list has no data, shows empty message', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: { hotel: { list: mockEmptyList, selectedHotel: undefined } },
    })

    const wrapper = mount(ListPaginated, { global: { plugins: [pinia] } })

    expect(wrapper.text()).toContain('Nenhum hotel encontrado.')
  })

  it('clicking view details button, updates selected hotel', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: { hotel: { list: mockList, selectedHotel: undefined } },
    })

    const wrapper = mount(ListPaginated, { global: { plugins: [pinia] } })

    const store = useHotelStore()

    const hotelCards = wrapper.findAllComponents({ name: 'HotelCard' })

    await hotelCards[0]?.vm.$emit('click-details')

    expect(store.setSelectedHotel).toHaveBeenCalledWith(mockHotelListData[0])
  })

  it('clicking pagination, updates page', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: { hotel: { list: mockList, params: { page: 1 } } },
    })

    const wrapper = mount(ListPaginated, { global: { plugins: [pinia] } })

    const store = useHotelStore()

    const pagination = wrapper.findComponent({ name: 'QPagination' })

    await pagination.vm.$emit('update:model-value', 2)

    expect(store.setParams).toHaveBeenCalledWith(expect.objectContaining({ page: 2 }))
  })

  it('displays correct hotel count in pagination area', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: { hotel: { list: mockList } },
    })

    const wrapper = mount(ListPaginated, { global: { plugins: [pinia] } })

    expect(wrapper.text()).toContain('2 hotéis encontrados')
  })
})
