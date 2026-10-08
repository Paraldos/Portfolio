<script setup lang="ts">
import { ref } from "vue";
import Burger from "./Burger.vue";

const menuOpen = ref(false);
</script>

<style scoped>
@import "./Header.css";
</style>

<template>
  <header class="header">
    <Burger :active="menuOpen" @click="menuOpen = !menuOpen"> </Burger>
    <nav
      class="header-nav"
      :class="{ active: menuOpen }"
      aria-label="Main navigation"
      :inert="!menuOpen"
    >
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
