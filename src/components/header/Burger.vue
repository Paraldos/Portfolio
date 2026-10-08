<script setup lang="ts">
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<style scoped>
@import "./Burger.css";
</style>

<template>
  <button
    class="burger"
    :class="{ active: menuOpen }"
    :aria-expanded="menuOpen"
    aria-label="Toggle menu"
    @click="menuOpen = !menuOpen"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>
