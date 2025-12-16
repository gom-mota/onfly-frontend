<script setup lang="ts">
defineProps<{ stars: string; imagePath: string }>()

const MAX_STARS = 5
</script>

<template>
  <div class="thumb-rating border-radius-inherit">
    <QImg
      :src="imagePath"
      fit="cover"
      class="border-radius-inherit"
      height="100%"
      loading-show-delay="6000"
    >
      <template v-slot:error>
        <div class="empty-image">
          <QIcon name="image" size="42px" color="grey-6" />
          <span class="empty-image__text">Imagem não encontrada</span>
        </div>
      </template>
    </QImg>

    <div class="rating">
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
.thumb-rating {
  position: relative;
  height: 100%;
}

.rating {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: $spacing-small;
  background: white;
  box-shadow: $shadow;
  border-radius: $border-radius-large;
  position: absolute;
  top: $spacing-medium;
  left: $spacing-medium;
}

.empty-image {
  display: flex;
  flex-direction: column;
  gap: $spacing-medium;
  align-items: center;
  justify-content: center;
  background-color: $color-info-500;
  height: 100%;
  width: 100%;
  text-align: center;
}

.empty-image__text {
  width: 100px;
  color: $color-info-100;
}
</style>
