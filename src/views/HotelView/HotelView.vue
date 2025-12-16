<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Composables
import useHotels from '@/composables/useHotels'

// Items
import ListFilter from './items/ListFilter/ListFilter.vue'
import ListPaginated from './items/ListPaginated/ListPaginated.vue'
import HotelDetailsDialog from './items/HotelDetailsDialog/HotelDetailsDialog.vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

const store = useHotelStore()

const { handleGetHotelList } = useHotels()

const isOpenHotelDetails = ref<boolean>(false)

watch(
  () => store.params,
  () => handleGetHotelList(),
  { immediate: true, deep: true },
)
</script>

<template>
  <div class="view-container">
    <div class="list-filter-wrapper">
      <ListFilter />
    </div>

    <ListPaginated v-model:is-open-hotel-details="isOpenHotelDetails" />

    <HotelDetailsDialog v-model:is-open="isOpenHotelDetails" />
  </div>
</template>

<style scoped lang="scss">
.view-container {
  padding-top: $spacing-regular;
  position: relative;
}

.list-filter-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-72px);
}
</style>
