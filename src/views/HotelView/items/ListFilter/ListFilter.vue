<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Utils
import { ORDER_OPTIONS } from './utils'

const { params, setParams } = useHotelStore()

const orderByInitialValue = ORDER_OPTIONS.find(({ value }) => value === params.sort)

const orderBy = ref<{ label: string; value: string } | undefined>(orderByInitialValue)
const name = ref<string | undefined>(undefined)

watch(
  [name, orderBy],
  ([nameValue, orderByValue]) =>
    setParams({
      filters: { ...params.filters, name: nameValue },
      sort: orderByValue?.value,
    }),
  { deep: true },
)
</script>

<template>
  <div class="listFilterContainer">
    <QSelect
      v-model="orderBy"
      :options="ORDER_OPTIONS"
      outlined
      dropdown-icon="keyboard_arrow_down"
      prefix="Ordenar por:"
      bg-color="white"
      map-options
    >
      <template #prepend>
        <QIcon name="swap_vert" />
      </template>
    </QSelect>

    <QInput
      v-model="name"
      outlined
      placeholder="Nome do Hotel"
      debounce="1000"
      clearable
      bg-color="white"
    >
      <template v-slot:prepend>
        <QIcon name="search" />
      </template>
    </QInput>
  </div>
</template>

<style scoped>
.listFilterContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
</style>
