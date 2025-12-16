<script setup lang="ts">
// Components
import ThumbRating from '@/components/ThumbRating/ThumbRating.vue'
import AmenityIcon from '../AmenityIcon/AmenityIcon.vue'

// Types
import type { IHotelData } from '@/types/hotel'

// Utils
import { formatCurrency } from '@/utils/money'

const props = defineProps<IHotelData>()

const emit = defineEmits<{ (event: 'click-details'): void }>()

const formattedTotalPrice = formatCurrency(props.totalPrice / 1000, 'hideZeroCents')
const formattedDailyPrice = formatCurrency(props.dailyPrice / 1000)
const formattedTaxes = formatCurrency(props.tax / 1000)
</script>

<template>
  <div class="hotel-card">
    <div class="hotel-card__thumb">
      <ThumbRating :stars="stars" :imagePath="thumb" />
    </div>

    <div class="hotel-card__wrapper">
      <div class="hotel-card__main">
        <div class="hotel-card__title">
          <span class="text-subtitle1 text-weight-medium">{{ name }}</span>
          <span class="text-caption text-grey">{{ district }}</span>
        </div>

        <div class="hotel-card__observations">
          <div v-if="amenities.length > 0" class="row items-center q-gutter-xs">
            <AmenityIcon v-for="amenity in amenities" :key="amenity" :name="amenity" />
          </div>

          <div class="hotel-card__benefits">
            <span v-if="hasRefundableRoom"><QIcon name="attach_money" /> Reembolsável</span>
            <span v-if="hasBreakFast"><QIcon name="local_cafe" /> Café da manhã</span>
          </div>
        </div>
      </div>

      <div class="hotel-card__details">
        <div class="column">
          <div class="text-caption text-grey-8">Por dia</div>
          <div class="text-h6 text-primary text-weight-bold">{{ formattedTotalPrice }}</div>
        </div>

        <div class="column">
          <div class="column q-mb-md">
            <div class="row justify-between">
              <div class="text-caption text-grey">Diárias</div>
              <div class="text-caption text-grey">
                {{ formattedDailyPrice }}
              </div>
            </div>

            <div class="row justify-between">
              <div class="text-caption text-grey">Taxas</div>
              <div class="text-caption text-grey">
                {{ formattedTaxes }}
              </div>
            </div>
          </div>

          <QBtn
            label="Ver detalhes"
            color="primary"
            size="md"
            rounded
            @click="emit('click-details')"
            :uppercase="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hotel-card {
  background-color: white;
  border-radius: $border-radius-large;
  display: flex;
  flex-direction: row;
  min-height: 220px;
  border: 1px solid $border-color;
  width: 100%;
}

.hotel-card__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.hotel-card__title {
  display: flex;
  flex-direction: column;
}

.hotel-card__observations {
  display: flex;
  flex-direction: column;
  gap: $spacing-regular;
}

.hotel-card__details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: $border-size solid #f0f0f0;
  padding: $spacing-regular $spacing-large;
  width: 200px;
}

.hotel-card__benefits {
  display: flex;
  flex-direction: column;
  gap: $spacing-small;
  color: $color-success-100;
}

.hotel-card__main {
  padding: $spacing-regular $spacing-large;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: $spacing-small;
  justify-content: space-between;
}

.hotel-card__thumb {
  width: 260px;
  min-width: 160px;
  border-radius: $border-radius-large 0 0 $border-radius-large;
}
</style>
