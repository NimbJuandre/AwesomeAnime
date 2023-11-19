<template>
  <v-layout class="rounded rounded-md">
    <!-- Top app bar -->
    <v-app-bar title="Application bar">
      <v-spacer></v-spacer>
      <v-btn rounded>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Views -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <RouterView />
    </v-main>

    <!-- Bottom navigation -->
    <v-bottom-navigation :elevation="0" grow active color="primary" mandatory v-model="value">
      <v-btn value="Home">
        <v-icon>mdi-home-outline</v-icon>
        <span>Home</span>
      </v-btn>
      <v-btn value="My List">
        <v-icon>mdi-list-box-outline</v-icon>
        <span>My List</span>
      </v-btn>
      <v-btn value="Profile">
        <v-icon>mdi-account-outline</v-icon>
        <span>Profile</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
<script setup>
const value = ref(0)
</script>
