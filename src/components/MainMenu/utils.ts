// Items
import HotelSearch from './items/HotelSearch/HotelSearch.vue'

// Types
import type { ITabs } from './types'

export const TAB_ITEMS: ITabs = {
  flight: {
    icon: 'flight',
    label: 'Aéreo',
    disable: true,
  },
  hotel: {
    icon: 'hotel',
    label: 'Hotel',
    content: HotelSearch,
  },
  car: {
    icon: 'directions_car',
    label: 'Carro',
    disable: true,
  },
  bus: {
    icon: 'directions_bus',
    label: 'Ônibus',
    disable: true,
  },
}
