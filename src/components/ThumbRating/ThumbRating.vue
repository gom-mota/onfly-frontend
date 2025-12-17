<script setup lang="ts">
// Packages
import { computed, ref } from 'vue'

// Utils
import { checkIfArrayIsValid } from '@/utils/array'

const props = defineProps<{ stars: string; imagePath: string | string[] }>()

const MAX_STARS = 5

const currentImageIndex = ref(0)

const hasMoreImages = computed(() => images.value.length > 1)

const images = computed(() => {
  if (checkIfArrayIsValid(props.imagePath)) return props.imagePath
  if (typeof props.imagePath === 'string') return [props.imagePath]
  return []
})

function handlePrevImage() {
  currentImageIndex.value =
    currentImageIndex.value === 0 ? images.value.length - 1 : currentImageIndex.value - 1
}

function handleNextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
}
</script>

<template>
  <div class="thumb-rating border-radius-inherit">
    <QImg :src="images[currentImageIndex]" fit="cover" class="border-radius-inherit" height="100%">
      <template v-slot:error>
        <div class="empty-image">
          <QIcon name="image" size="42px" color="grey-4" />

          <div class="empty-image__text">
            <span class="text-grey-4">Imagem não encontrada</span>
          </div>
        </div>
      </template>

      <div v-if="hasMoreImages" class="thumb-rating__buttons absolute-bottom">
        <QBtn
          round
          dense
          icon="chevron_left"
          color="white"
          text-color="primary"
          class="arrow left-arrow"
          @click="handlePrevImage"
        />

        <QBtn
          round
          dense
          icon="chevron_right"
          color="white"
          text-color="primary"
          class="arrow right-arrow"
          @click="handleNextImage"
        />
      </div>
    </QImg>

    <div class="thumb-rating__stars">
      <QIcon
        v-for="i in MAX_STARS"
        :key="i"
        name="star"
        :color="i <= Number(stars) ? 'secondary' : 'grey-4'"
        size="14px"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.thumb-rating__buttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
}

.thumb-rating {
  position: relative;
  height: 100%;
}

.thumb-rating__stars {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: $spacing-small;
  background: white;
  box-shadow: $shadow;
  border-radius: $border-radius-large;
  position: absolute;
  top: $spacing-regular;
  left: $spacing-regular;
}

.empty-image {
  display: flex;
  flex-direction: column;
  gap: $spacing-medium;
  align-items: center;
  justify-content: center;
  background-color: $color-info-200;
  height: 100%;
  width: 100%;
  text-align: center;
}

.empty-image__text {
  width: 100px;
}
</style>
