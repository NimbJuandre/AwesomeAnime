import { registerPlugins } from '@/plugins'
import "notyf/notyf.min.css";
import App from './App.vue'
import { createApp } from 'vue'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(VueVideoPlayer)

registerPlugins(app)

app.mount('#app')
