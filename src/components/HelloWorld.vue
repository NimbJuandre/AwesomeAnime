<template>
  <div>
    <input v-model="searchQuery" placeholder="Enter anime title" />
    <button @click="performSearch">Search</button>
    <div v-if="searchResults.length">
      <h2>Search Results:</h2>
      <ul>
        <li @click="getAnimeEpisodeInfo(result.id)" v-for="result in searchResults" :key="result.id">{{ result.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
  <video-player src="https://www005.vipanicdn.net/streamhls/027e9529af2b06fe7b4f47e507a787eb/ep.1.1677593055.1080.m3u8" controls :loop="false" :volume="1"></video-player>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const searchQuery = ref('');
const searchResults = ref([]);

const performSearch = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/search', {
      params: {
        query: searchQuery.value,
      },
    });

    searchResults.value = response.data.results;
  } catch (error) {
    console.error('Error performing search:', error);
  }
};
const getAnimeInfo = async (id) => {
  try {
    const response = await axios.get('http://localhost:3001/api/fetchAnimeInfo', {
      params: {
        query: id,
      },
    });

    searchResults.value = response.data.results;
  } catch (error) {
    console.error('Error performing search:', error);
  }
};
const getAnimeEpisodeInfo = async (id) => {
  try {
    const response = await axios.get('http://localhost:3001/api/fetchEpisodeSources', {
      params: {
        query: 'naruto-episode-1',
      },
    });

    searchResults.value = response.data.results;
  } catch (error) {
    console.error('Error performing search:', error);
  }
};
</script>