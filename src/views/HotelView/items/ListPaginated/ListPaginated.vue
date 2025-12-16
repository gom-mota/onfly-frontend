<script setup lang="ts">
// Packages
import { computed, ref } from 'vue'

// Components
import HotelCard from '@/components/HotelCard/HotelCard.vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Types
import type { IHotelData } from '@/types/hotel'

const isOpenHotelDetails = defineModel<boolean>('isOpenHotelDetails')

const store = useHotelStore()

const { setSelectedHotel } = store

const pagination = ref()

const hasListData = computed(() => store.list.data.length > 0)

const onClickViewDetails = (data: IHotelData) => {
  setSelectedHotel(data)
  isOpenHotelDetails.value = true
}
</script>

<template>
  <div class="list-paginated">
    <div class="list-data">
      <template v-if="hasListData">
        <HotelCard
          v-for="(hotel, index) in store.list.data"
          :key="`${hotel.id}-${index}`"
          v-bind="hotel"
          @click-details="onClickViewDetails(hotel)"
        />

        <QPagination
          v-model="pagination"
          max="5"
          direction-links
          flat
          color="grey"
          active-color="primary"
        />
      </template>

      <div v-else class="list-data--empty">Nenhum hotel encontrado.</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-paginated {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.list-data {
  display: flex;
  flex-direction: column;
  gap: $spacing-small;
  align-items: center;
}

.list-data--empty {
  padding: $spacing-xlarge;
  font-size: $font-size-title;
}
</style>
