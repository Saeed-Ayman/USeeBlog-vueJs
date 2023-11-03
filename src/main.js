import {createApp} from 'vue'
import App from '@/views/App.vue'
import icons from './icons.js'
import Route from './routes/route.js'

createApp(App)
    .component("v-icon", icons)
    .use(Route)
    .mount('#app');
