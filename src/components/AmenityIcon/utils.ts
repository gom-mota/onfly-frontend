// Types
import type { IHotelAmenities } from '@/types/hotel'

export const AMENITY_INFO: Record<IHotelAmenities, { icon: string; label: string }> = {
  restaurant: { icon: 'local_dining', label: 'Restaurante' },
  pool: { icon: 'pool', label: 'Piscina' },
  accessibility: { icon: 'accessible_forward', label: 'Acessibilidade' },
  parking: { icon: 'local_parking', label: 'Estacionamento' },
  wifi: { icon: 'wifi', label: 'Wi-fi grátis' },
  air: { icon: 'ac_unit', label: 'Ar-condicionado' },
}
