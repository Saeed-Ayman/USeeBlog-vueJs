import {createRouter, createWebHistory} from 'vue-router';
import {handler} from '@/routes/middlewares/middleware.js';
import Routes from './routes.js';
import User from "@/services/APIS/User.js";
import {useAuthStore} from "@/stores/useAuthStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
    scrollBehavior(to, from) {
        if (to.path !== from.path) return {top: 0, behavior: "smooth"};
    }
});

router.beforeEach(async (to) => {
    await useAuthStore().init();
    return await handler(to);
});


export default router;
