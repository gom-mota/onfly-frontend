<script setup lang="ts">
// Packages
import { ref, computed } from 'vue'

// Types
import type { ITabs } from './types'

// Utils
import { TAB_ITEMS } from './utils'

const selectedTabName = ref<keyof ITabs>('hotel')

const selectedTabContent = computed(() => TAB_ITEMS[selectedTabName.value]?.content)
</script>

<template>
  <div class="main-menu">
    <div>
      <QTabs
        v-model="selectedTabName"
        inline-label
        align="left"
        active-color="primary"
        class="text-grey-8"
      >
        <QRouteTab
          v-for="[name, { label, icon, disable }] in Object.entries(TAB_ITEMS)"
          :key="name"
          :name="name"
          :icon="icon"
          :label="label"
          :to="`/${name}`"
          :disable="disable"
        />
      </QTabs>
    </div>

    <div>
      <component :is="selectedTabContent" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-menu {
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  border-radius: $border-radius-large;
  max-width: $breakpoint-main-container;
  padding: $spacing-medium;
  box-shadow: $shadow;
  gap: $spacing-regular;
}
</style>
