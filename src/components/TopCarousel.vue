<template>
    <v-carousel class="carousel" height="400"  interval="5000" color="red" :mandatory="true" :show-arrows=false hide-delimiters progress="primary">
        <v-carousel-item v-for="(anime, i) in topAiring" :key="i" :src="anime.cover" cover>
        </v-carousel-item>
    </v-carousel>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const topAiring = ref([]);
const selectTopAiring = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/topAiring');
        topAiring.value = response.data.results;
    } catch (error) {
        console.error('Error performing search:', error);
    }
};

onMounted(async () => {
    await selectTopAiring();
});
</script>
<style>
.courasel .v-responsive__sizer {
    box-shadow: 0px -31px 43px black inset;
}
</style>