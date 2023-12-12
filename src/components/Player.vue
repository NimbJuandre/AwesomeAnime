<template>
    <div class="video-wrapper">
        <div class="controlls-wrapper">
            <div class="top-controlls"></div>
            <video ref="videoPlayer" width="600" height="400">
                <source :src="videoSource" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="bottom-controlls">
                <v-container>
                    <v-row align="center" justify="center">
                        <v-col class="pa-1" cols="auto">
                            <v-btn class="control" variant="plain" icon="mdi-rewind-10"></v-btn>
                        </v-col>
                        <v-col class="pa-1" cols="auto">
                            <v-btn class="control" variant="plain" icon="mdi-skip-previous-outline"></v-btn>
                        </v-col>
                        <v-col class="pa-1" cols="auto">
                            <v-btn class="control play" variant="plain" icon="mdi-play-circle-outline"></v-btn>
                        </v-col>
                        <v-col class="pa-1" cols="auto">
                            <v-btn class="control" variant="plain" icon="mdi-skip-next-outline"></v-btn>
                        </v-col>
                        <v-col class="pa-1" cols="auto">
                            <v-btn class="control" variant="plain" icon="mdi-fast-forward-10"></v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <div>
            <button @click="playPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
            <input type="range" v-model="currentTime" @input="seek" :max="duration" />
            <span>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const videoPlayer = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const videoSource = '/src/assets/video.mp4';

const playPause = () => {
    isPlaying.value ? videoPlayer.value.pause() : videoPlayer.value.play();
    isPlaying.value = !isPlaying.value;
};

const seek = () => {
    videoPlayer.value.currentTime = currentTime.value;
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

onMounted(() => {
    videoPlayer.value.addEventListener('timeupdate', () => {
        currentTime.value = videoPlayer.value.currentTime;
    });

    videoPlayer.value.addEventListener('loadedmetadata', () => {
        duration.value = videoPlayer.value.duration;
    });
});

onBeforeUnmount(() => {
    videoPlayer.value.removeEventListener('timeupdate', () => { });
    videoPlayer.value.removeEventListener('loadedmetadata', () => { });
});
</script>
<style scoped>
.bottom-controlls .control {
    font-size: medium;
    color: white !important;
}

.bottom-controlls .control.play {
    font-size: xx-large !important;
}
</style>