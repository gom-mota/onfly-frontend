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
  <div class="q-pa-md q-mx-xl q-mt-lg bg-white rounded-borders">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <QTabs
        v-model="selectedTabName"
        inline-label
        class="text-black shadow-2"
        align="left"
        active-color="primary"
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

    <div class="q-pa-md">
      <component :is="selectedTabContent" />
    </div>
  </div>
</template>

<style scoped></style>
