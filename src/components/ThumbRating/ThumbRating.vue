<script setup lang="ts">
defineProps<{ stars: number; imagePath: string }>()

const MAX_STARS = 5
</script>

<template>
  <QImg :src="imagePath" fit="cover" class="border-radius-inherit" height="100%">
    <div style="background-color: transparent">
      <div class="rating">
        <QIcon
          v-for="i in MAX_STARS"
          :key="i"
          name="star"
          :color="i <= stars ? 'secondary' : 'grey-4'"
          size="14px"
        />
      </div>
    </div>
  </QImg>
</template>

<style scoped lang="scss">
.rating {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: $spacing-small;
  background: white;
  box-shadow: $shadow;
  border-radius: $border-radius-large;
}
</style>
