<script setup lang="ts">
// Packages
import { watch } from 'vue'

// Composables
import useHotels from '@/composables/useHotels'

// Items
import ListFilter from './items/ListFilter/ListFilter.vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

const store = useHotelStore()
const { handleGetHotelList } = useHotels()

watch(
  () => store.params,
  () => handleGetHotelList(),
  { immediate: true, deep: true },
)
</script>

<template>
  <div class="mainContainer">
    <div class="listFilterWrapper">
      <ListFilter />
    </div>
    <h2>hotel list:</h2>
    <div v-for="hotel in store.list.data" :key="hotel.id">
      <p>{{ hotel.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  border-radius: 80px 80px 0 0;
  background-color: #f3f3f3;
  position: relative;
  height: 100%;
}

.listFilterWrapper {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%) translateY(-20px);
}
</style>
