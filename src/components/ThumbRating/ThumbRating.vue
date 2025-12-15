<script setup lang="ts">
defineProps<{ stars: number; imagePath: string }>()

const MAX_STARS = 5
</script>

<template>
  <QImg :src="imagePath" fit="fill" class="border-radius-inherit">
    <div style="background-color: transparent">
      <div class="rating-container q-pa-sm shadow-2">
        <QIcon
          v-for="i in MAX_STARS"
          :key="i"
          name="star"
          :color="i <= stars ? 'primary' : 'grey-4'"
          size="14px"
        />
      </div>
    </div>
  </QImg>
</template>

<style scoped lang="scss">
.rating-container {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: white;
  border-radius: 50px;
}
</style>
