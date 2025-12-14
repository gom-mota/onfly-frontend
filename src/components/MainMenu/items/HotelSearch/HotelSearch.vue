<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Composables
import useCities from '@/composables/useCities'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Utils
import { mountPlaceOptions } from './utils'

const { params, setParams } = useHotelStore()

const { handleGetCitiesList } = useCities()

const placeId = ref<{ label: string; value: string } | undefined>(undefined)
const placeTyped = ref<string>('')
const placeOptions = ref<Array<{ label: string; value: string }>>([])

const onSubmit = () => {
  setParams({ filters: { ...params.filters, placeId: placeId.value?.value } })
}

const handleSetPlaceOptions = async () => {
  const response = await handleGetCitiesList(placeTyped.value)
  const responseData = response && response.data

  if (responseData) placeOptions.value = mountPlaceOptions(responseData)
}

watch(
  () => placeId.value,
  (value) => !value && setParams({ filters: { placeId: undefined } }),
)

watch(
  () => placeTyped.value,
  () => handleSetPlaceOptions(),
  { immediate: true },
)
</script>

<template>
  <div>
    <QForm @submit="onSubmit">
      <div class="q-pa-sm bg-grey-2 full-width row justify-between items-center">
        <QSelect
          v-model="placeId"
          :options="placeOptions"
          label="Destino"
          use-input
          placeholder="Selecione um destino"
          style="width: 300px"
          outlined
          hide-selected
          clearable
          fill-input
          debounce="1000"
          @filter="
            (inputValue, doneFn) => {
              placeTyped = inputValue.length >= 3 ? inputValue : ''
              doneFn(() => {})
            }
          "
        />

        <div>
          <QBtn label="Buscar Hotel" type="submit" color="primary" icon="search" />
        </div>
      </div>
    </QForm>
  </div>
</template>

<style scoped></style>
