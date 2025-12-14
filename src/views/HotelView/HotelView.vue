<script setup lang="ts">
// Items
import ListFilter from './items/ListFilter/ListFilter.vue'
</script>

<template>
  <div class="mainContainer">
    <div class="listFilterWrapper">
      <ListFilter />
    </div>
    <h1>Hotel</h1>
  </div>
</template>

<style scoped>
.mainContainer {
  border-radius: 80px 80px 0 0;
  background-color: #f3f3f3;
  position: relative;
  height: 100%;
}

.listFilterWrapper {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%) translateY(-20px);
}
</style>
