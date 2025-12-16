<script setup lang="ts">
// Packages
import { computed } from 'vue'

// Components
import AmenityIcon from '../AmenityIcon/AmenityIcon.vue'
import ThumbRating from '../ThumbRating/ThumbRating.vue'

// Types
import type { IHotelAmenities, IHotelDetailsData } from '@/types/hotel'

// Utils
import { checkIfArrayIsValid } from '@/utils/array'

const props = defineProps<IHotelDetailsData>()

const amenitiesList = computed(() => {
  if (checkIfArrayIsValid(props.amenities) === false) return []

  return props.amenities.map(({ key }) => key) as IHotelAmenities[]
})
</script>

<template>
  <div class="hotel-details-card__container">
    <ThumbRating :stars="stars" :imagePath="images[0] || ''" class="hotel-details-card__image" />

    <div class="hotel-details-card__content">
      <div v-if="amenities.length > 0">
        <div>
          <div class="text-primary text-subtitle2 q-mb-sm">Comodidades</div>
          <div class="hotel-details-card__amenities">
            <AmenityIcon
              v-for="amenity in amenitiesList"
              :key="amenity"
              :name="amenity"
              with-label
            />
          </div>
        </div>
      </div>

      <div>
        <div class="text-primary text-subtitle2 q-mb-sm">Localização</div>
        <div class="text-body-1">{{ fullAddress }}</div>
      </div>

      <div>
        <div class="text-primary text-subtitle2 q-mb-sm">Sobre o {{ name }}</div>
        <div class="text-body-1">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hotel-details-card__image {
  height: 220px;
  border-radius: $border-radius-regular;
}

.hotel-details-card__container {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: $spacing-regular;
  background-color: white;
}

.hotel-details-card__content {
  display: flex;
  flex-direction: column;
  gap: $spacing-large;
}

.hotel-details-card__amenities {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 16px;
}

.hotel-details-card__amenities:has(:nth-child(n + 4)) {
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
}
</style>
