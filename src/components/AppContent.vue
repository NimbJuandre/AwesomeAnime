<template>
  <v-app class="main-content">
    <router-view v-slot="{ Component }">
      <VSlideXTransition mode="out-in">
        <component :is="Component" />
      </VSlideXTransition>
    </router-view>
  </v-app>
</template>
<script setup>
</script>
