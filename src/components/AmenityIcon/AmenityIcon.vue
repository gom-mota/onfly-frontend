<script setup lang="ts">
// types
import type { IHotelAmenities } from '@/types/hotel'

// Utils
import { AMENITY_INFO } from './utils'

defineProps<{ name: IHotelAmenities; withLabel?: boolean }>()
</script>

<template>
  <div class="amenity-icon-container">
    <QIcon :name="AMENITY_INFO[name].icon" :class="{ 'icon-background': !withLabel }" size="xs">
      <QTooltip v-if="!withLabel" anchor="top middle" self="bottom middle" :offset="[10, 10]">
        {{ AMENITY_INFO[name].label }}
      </QTooltip>
    </QIcon>

    <span v-if="withLabel" class="amenity-label">{{ AMENITY_INFO[name].label }}</span>
  </div>
</template>

<style scoped lang="scss">
.icon-background {
  background-color: #e0e0e0;
  border-radius: 50%;
  padding: 0.4rem;
}
.amenity-icon-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
