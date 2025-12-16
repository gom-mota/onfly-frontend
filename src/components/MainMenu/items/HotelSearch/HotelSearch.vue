<script setup lang="ts">
// Packages
import { ref, watch } from 'vue'

// Composables
import useCities from '@/composables/useCities'

// Stores
import useHotelStore from '@/stores/useHotelStore'

// Utils
import { mountPlaceOptions } from './utils'

const { setFilters } = useHotelStore()

const { handleGetCitiesList } = useCities()

const placeId = ref<{ label: string; value: number } | undefined>(undefined)
const placeTyped = ref<string>('')
const placeOptions = ref<Array<{ label: string; value: number }>>([])

const onSubmit = () => {
  setFilters({ placeId: placeId.value?.value })
}

const handleSetPlaceOptions = async () => {
  const response = await handleGetCitiesList(placeTyped.value)
  const responseData = response && response.data

  if (responseData) placeOptions.value = mountPlaceOptions(responseData)
}

watch(
  () => placeId.value,
  (value) => !value && setFilters({ placeId: undefined }),
)

watch(
  () => placeTyped.value,
  () => handleSetPlaceOptions(),
  { immediate: true },
)
</script>

<template>
  <QForm @submit="onSubmit">
    <div class="hotel-search">
      <QSelect
        v-model="placeId"
        :options="placeOptions"
        label="Destino"
        use-input
        placeholder="Selecione um destino"
        hide-selected
        clearable
        borderless
        fill-input
        debounce="1000"
        class="place-select"
        dense
        @filter="
          (inputValue, doneFn) => {
            placeTyped = inputValue.length >= 3 ? inputValue : ''
            doneFn(() => {})
          }
        "
      >
        <template v-slot:no-option>
          <QItem>
            <QItemSection class="text-italic text-grey">Nenhum resultado encontrado.</QItemSection>
          </QItem>
        </template>
      </QSelect>

      <div>
        <QBtn label="Buscar Hotel" type="submit" color="primary" icon="search" push />
      </div>
    </div>
  </QForm>
</template>

<style scoped lang="scss">
.place-select {
  border-radius: $border-radius-small;
  border: $border-size solid;
  border-color: $border-color;
  padding: 0 $spacing-regular;
  width: 360px;
}

.hotel-search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f6;
  border-radius: $border-radius-regular;
  padding: $spacing-small;
}
</style>
