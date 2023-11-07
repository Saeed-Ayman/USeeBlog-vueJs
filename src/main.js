import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from '@/views/App.vue';
import icons from './icons.js';
import Route from './routes/route.js';

const pinia = createPinia()

createApp(App)
    .component("v-icon", icons)
    .use(Route)
    .use(pinia)
    .mount('#app');
