<script setup lang="ts">
import Burger from "./Burger.vue";
</script>

<style scoped>
@import "./Header.css";
</style>

<template>
  <header class="header">
    <Burger></Burger>
    <nav class="header-nav" aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
