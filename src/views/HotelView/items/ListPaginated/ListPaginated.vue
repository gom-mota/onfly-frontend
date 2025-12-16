<script setup lang="ts">
// Packages
import { computed } from 'vue'

// Components
import HotelCard from '@/components/HotelCard/HotelCard.vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Types
import type { IHotelData } from '@/types/hotel'

const isOpenHotelDetails = defineModel<boolean>('isOpenHotelDetails')

const store = useHotelStore()

const { setSelectedHotel } = store

const pagination = computed(() => store.params.page)

const hasListData = computed(() => store.list.data.length > 0)

const onClickViewDetails = (data: IHotelData) => {
  setSelectedHotel(data)
  isOpenHotelDetails.value = true
}

const onChangePage = (page: number) => {
  store.setParams({ ...store.params, page })
}
</script>

<template>
  <div class="list-paginated">
    <template v-if="hasListData">
      <div class="list-data">
        <div class="list-data__content">
          <HotelCard
            v-for="(hotel, index) in store.list.data"
            :key="`${hotel.id}-${index}`"
            v-bind="hotel"
            @click-details="onClickViewDetails(hotel)"
          />
        </div>

        <div class="list-data__pagination">
          <QPagination
            v-model="pagination"
            :max="store.list.totalPages"
            direction-links
            flat
            color="grey"
            active-color="primary"
            @update:model-value="onChangePage"
          />

          <span>{{ store.list.count }} hotéis encontrados</span>
        </div>
      </div>
    </template>

    <div v-else class="list-data--empty">
      <QIcon name="search_off" size="42px" color="grey-8" />

      <span>Nenhum hotel encontrado.</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-paginated {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.list-data {
  display: flex;
  flex-direction: column;
  gap: $spacing-xlarge;
  width: 100%;
}

.list-data__content {
  display: flex;
  flex-direction: column;
  gap: $spacing-small;
  align-items: center;
}

.list-data__pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.list-data--empty {
  padding: $spacing-xlarge;
  font-size: $font-size-title;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-medium;
}
</style>
