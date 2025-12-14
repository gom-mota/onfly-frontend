<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Stores
import useHotelStore from '@/stores/useHotelStore'

const { params, setParams } = useHotelStore()

const placeId = ref<{ label: string; value: string } | undefined>(undefined)

const options = [
  { label: 'Rio de Janeiro', value: 'ChIJiQHsW0mZwokR3YlJ5pBHd2Q' },
  { label: 'São Paulo', value: 'ChIJE9on3F3HwoAR9AhGJW_fL-I' },
  { label: 'Salvador', value: 'ChIJ0X31pV1-4pQRk7h6e4g8f6M' },
]

const onSubmit = () => {
  setParams({ filters: { ...params.filters, placeId: placeId.value?.value } })
}

watch(
  () => placeId.value,
  (value) => !value && setParams({ filters: { placeId: undefined } }),
)
</script>

<template>
  <div>
    <QForm @submit="onSubmit">
      <div class="q-pa-sm bg-grey-2 full-width row justify-between items-center">
        <QSelect
          v-model="placeId"
          :options="options"
          label="Destino"
          placeholder="Selecione um destino"
          style="width: 300px"
          outlined
          clearable
        />

        <div>
          <QBtn label="Buscar Hotel" type="submit" color="primary" icon="search" />
        </div>
      </div>
    </QForm>
  </div>
</template>

<style scoped></style>
