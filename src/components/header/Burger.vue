<script setup lang="ts">
defineProps<{
  active: boolean;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button
    class="burger"
    :class="{ active }"
    :aria-expanded="active"
    aria-label="Toggle menu"
    @click="emit('click')"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style scoped>
@import "./Burger.css";
</style>
