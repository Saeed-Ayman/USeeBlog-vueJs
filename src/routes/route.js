import {createRouter, createWebHistory} from 'vue-router';
import Routes from './router';

export default createRouter({
    history: createWebHistory(),
    routes: Routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path !== from.path) return {top: 0, behavior: "smooth"};
    }
});
