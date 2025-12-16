<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Components
import HotelDetailsCard from '@/components/HotelDetailsCard/HotelDetailsCard.vue'

// Composables
import useHotels from '@/composables/useHotels'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Types
import type { IHotelDetailsData } from '@/types/hotel'

const isOpen = defineModel<boolean>('isOpen')

const store = useHotelStore()

const { handleGetHotelData } = useHotels()

const hotelDetailsData = ref<IHotelDetailsData | undefined>(undefined)

const handleSetHotelDetailsData = async () => {
  if (!store.selectedHotel) return

  const response = await handleGetHotelData(store.selectedHotel.id)
  const responseData = response && response.data

  if (responseData) hotelDetailsData.value = responseData
}

watch(
  () => store.selectedHotel,
  () => handleSetHotelDetailsData(),
)
</script>

<template>
  <QDialog v-model="isOpen">
    <div class="hotel-details-dialog">
      <div class="hotel-details-dialog__header">
        <span class="text-h6">{{ store.selectedHotel?.name }}</span>
        <QBtn icon="close" flat round dense @click="isOpen = false" />
      </div>

      <div class="hotel-details-dialog__content">
        <div v-if="!hotelDetailsData">Não foi encontrado detalhes do hotel.</div>

        <div v-else>
          <HotelDetailsCard v-bind="hotelDetailsData" />
        </div>
      </div>
    </div>
  </QDialog>
</template>

<style scoped lang="scss">
.hotel-details-dialog {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: $border-radius-regular;
  padding: $spacing-medium;
  gap: $spacing-regular;
}

.hotel-details-dialog__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: $spacing-regular;
  border-bottom: 1px solid $border-color;
}

.hotel-details-dialog__content {
  overflow-y: auto;
  padding-right: $spacing-small;
}
</style>
