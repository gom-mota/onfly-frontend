<script setup lang="ts">
// Packages
import { RouterView } from 'vue-router'

// Components
import MainMenu from './components/MainMenu/MainMenu.vue'
</script>

<template>
  <div class="app">
    <header class="header">
      <QImg src="@/assets/brand-logo.png" width="120px" />
    </header>

    <div class="main-menu__wrapper">
      <MainMenu />
    </div>

    <div class="app__content">
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: $spacing-small 0;
  margin-bottom: $spacing-large;
}

.main-menu__wrapper {
  margin-bottom: $spacing-xlarge;
  width: 100%;
  max-width: $breakpoint-main-container;
  margin: 0 auto;
  margin-bottom: calc($spacing-xlarge + 1rem);
  padding: 0 $spacing-regular;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  margin: auto;
}

.app__content {
  background-color: $color-background-secondary;
  flex: 1;
  border-radius: 60px 60px 0 0;

  > div {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: $breakpoint-main-container;
    padding: $spacing-large $spacing-regular;
  }
}
</style>
