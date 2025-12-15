<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Composables
import useHotels from '@/composables/useHotels'

// Items
import ListFilter from './items/ListFilter/ListFilter.vue'
import ListPaginated from './items/ListPaginated/ListPaginated.vue'

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
  </div>
</template>

<style scoped>
.view-container {
  border-radius: 80px 80px 0 0;
  background-color: #f3f3f3;
  position: relative;
  padding: 3rem 3.5rem;
  height: 100%;
}

.list-filter-wrapper {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%) translateY(-20px);
}
</style>
