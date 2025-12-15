<script setup lang="ts">
// Components
import ThumbRating from '@/components/ThumbRating/ThumbRating.vue'
import AmenityIcon from '../AmenityIcon/AmenityIcon.vue'

// Types
import type { IHotelCardProps, IHotelCardEmits } from './types'

const props = defineProps<IHotelCardProps>()

const emit = defineEmits<IHotelCardEmits>()

const formattedDailyPrice = props.dailyPrice.toLocaleString('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
})

const formattedTaxes = props.taxes.toLocaleString('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
})
</script>

<template>
  <div class="hotel-card">
    <div class="hotel-card__thumb">
      <ThumbRating :stars="stars" :imagePath="thumbSrc" />
    </div>

    <div class="hotel-card__wrapper">
      <div class="hotel-card__main">
        <div class="hotel-card__title">
          <span class="text-subtitle1 text-weight-medium">{{ name }}</span>
          <span class="text-caption text-grey">{{ place }}</span>
        </div>

        <div class="hotel-card__observations">
          <div class="row items-center q-gutter-xs">
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
          <div class="text-h6 text-primary text-weight-bold">R$ {{ totalPrice }}</div>
        </div>

        <div class="column">
          <div class="column q-mb-sm">
            <div class="row justify-between">
              <div class="text-caption text-grey">Diarias</div>
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
            size="sm"
            class="q-mt-sm"
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
  border-radius: var(--q-radius-lg);
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  min-height: 210px;
  border: 1px solid #e0e0e0;
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
  gap: 1rem;
}

.hotel-card__details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 2px solid #e0e0e0;
  padding: 1rem 1.5rem;
  width: 180px;
}

.hotel-card__benefits {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: $color-success-100;
}

.hotel-card__main {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  justify-content: space-between;
}

.hotel-card__thumb {
  width: 260px;
  min-width: 160px;
  border-radius: 1rem 0 0 1rem;
}
</style>
