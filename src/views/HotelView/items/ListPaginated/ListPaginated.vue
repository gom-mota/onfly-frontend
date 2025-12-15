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
  <div class="list-container">
    <div class="column q-gutter-sm">
      <template v-if="hasListData">
        <HotelCard
          v-for="hotel in store.list.data"
          :key="hotel.id"
          :name="hotel.name"
          :place="hotel.district"
          :thumbSrc="hotel.thumb"
          :stars="hotel.stars"
          :totalPrice="hotel.totalPrice"
          :dailyPrice="hotel.dailyPrice"
          :taxes="hotel.tax"
          :amenities="hotel.amenities"
          :hasBreakFast="hotel.hasBreakFast"
          :hasRefundableRoom="hotel.hasRefundableRoom"
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

      <div v-else>Nenhum hotel encontrado.</div>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
