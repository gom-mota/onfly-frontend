<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Utils
import { ORDER_OPTIONS } from './utils'

const { params, setParams, setFilters } = useHotelStore()

const orderByInitialValue = ORDER_OPTIONS.find(({ value }) => value === params.sort)

const orderBy = ref<{ label: string; value: string } | undefined>(orderByInitialValue)
const name = ref<string | undefined>(undefined)

watch(name, () => setFilters({ name: name.value }))

watch(orderBy, () => setParams({ sort: orderBy.value?.value }))
</script>

<template>
  <div class="list-filter__container">
    <div class="list-filter__content">
      <QSelect
        v-model="orderBy"
        :options="ORDER_OPTIONS"
        borderless
        dropdown-icon="keyboard_arrow_down"
        prefix="Ordenar por:"
        bg-color="white"
        map-options
        dense
      >
        <template #prepend>
          <QIcon name="swap_vert" />
        </template>
      </QSelect>
    </div>

    <div class="list-filter__content">
      <QInput
        v-model="name"
        borderless
        placeholder="Nome do Hotel"
        debounce="1000"
        clearable
        bg-color="white"
        dense
        class="name-select"
      >
        <template v-slot:prepend>
          <QIcon name="search" />
        </template>
      </QInput>
    </div>
  </div>
</template>

<style scoped lang="scss">
.name-select {
  border-radius: $border-radius-small;
  border: $border-size solid;
  border-color: $border-color;
  padding: 0 $spacing-regular;
  width: 320px;
}

.list-filter__container {
  display: flex;
  flex-direction: row;
  gap: $spacing-regular;
  align-items: center;
}

.list-filter__content {
  padding: $spacing-small;
  border-radius: $border-radius-small;
  background-color: white;
  box-shadow: $shadow;
}
</style>
