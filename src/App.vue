<template>
  <v-layout class="rounded rounded-md">
    <!-- Top app bar -->
    <v-app-bar :title=title color="transparent" elevation="0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon color="whire" icon="mdi-home"></v-app-bar-nav-icon>
      </template>
      <v-spacer></v-spacer>
      <v-btn color="white" icon="mdi-magnify">
      </v-btn>
    </v-app-bar>

    <!-- Views -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <AppContent></AppContent>
    </v-main>

    <!-- Bottom navigation -->
    <v-bottom-navigation calss="bottom-nav" :elevation="0" grow active color="#b1b0b0" mandatory v-model="value">
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
import { useRoute } from 'vue-router'
import AppContent from './components/AppContent.vue'

const route = useRoute()
const value = ref(0)
const title = ref('Application bar')

onMounted(() => {
  updateTitle()
})

watch(
  () => route.name,
  () => {
    updateTitle()
  }
)

function updateTitle() {
  const routeTitle = route.meta.title
  title.value = routeTitle
}
</script>
<style>
.v-main {
  background: #232526;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #141618, #232526);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #141618, #232526);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.v-bottom-navigation {
  background: #232526 !important;
}

.v-bottom-navigation .v-btn {
  color: rgb(177, 176, 176) !important;
}

.v-bottom-navigation .v-btn.v-btn--selected .v-btn__content {
  color: #b72626;
}
</style>
