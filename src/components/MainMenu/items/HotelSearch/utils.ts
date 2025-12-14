// Types
import type { ICityData } from '@/types/city'

// Utils
import { checkIfArrayIsValid } from '@/utils/array'

export const mountPlaceOptions = (data: ICityData[]) => {
  if (checkIfArrayIsValid(data) === false) return []

  return data.map(({ name, placeId, state }) => ({
    label: `${name}, ${state.name}`,
    value: placeId,
  }))
}
