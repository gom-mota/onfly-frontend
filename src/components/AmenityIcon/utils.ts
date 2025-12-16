// Types
import type { IHotelAmenities } from '@/types/hotel'

export const AMENITY_INFO: Record<IHotelAmenities, { icon: string; label: string }> = {
  RESTAURANT: { icon: 'local_dining', label: 'Restaurante' },
  POOL: { icon: 'pool', label: 'Piscina' },
  PARKING: { icon: 'local_parking', label: 'Estacionamento' },
  WI_FI: { icon: 'wifi', label: 'Wi-fi grátis' },
  ROOM_SERVICE: { icon: 'room_service', label: 'Serviço de quarto' },
  FITNESS_CENTER: { icon: 'fitness_center', label: 'Academia' },
  STEAM_ROOM: { icon: 'sauna', label: 'Sauna a vapor' },
  PET_FRIENDLY: { icon: 'pets', label: 'Aceita pets' },
  BAR: { icon: 'local_bar', label: 'Bar' },
  SPA: { icon: 'spa', label: 'Spa' },
}
