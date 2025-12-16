<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <QImg
      src="@/assets/brand-logo-white.svg"
      fit="scale-down"
      width="200px"
      height="64px"
      no-spinner
    />

    <span>Página não encontrada</span>

    <QBtn to="/" text-color="white" outline rounded label="Ir para o início" icon="arrow_back" />
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  font-size: 1.3rem;
  gap: $spacing-large;
  color: $color-white;
}
</style>
