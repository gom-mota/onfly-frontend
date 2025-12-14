<script setup lang="ts">
// Packages
import { ref } from 'vue'

// Utils
import { ORDER_OPTIONS } from './utils'

const orderBy = ref<string | undefined>('totalPrice')
const name = ref<string | undefined>(undefined)
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
