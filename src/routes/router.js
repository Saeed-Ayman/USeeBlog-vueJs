import {createRouter, createWebHistory} from 'vue-router';
import {handler} from '@/routes/middlewares/middleware.js';
import Routes from './routes.js';
import User from "@/services/APIS/User.js";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useLoadingStore} from "@/stores/useLoadingStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
    scrollBehavior(to, from) {
        if (to.path !== from.path) return {top: 0, behavior: "smooth"};
    }
});

router.beforeEach(async (to) => {
    const loadingStore = useLoadingStore();
    loadingStore.start('middleware');

    await useAuthStore().init();
    const redirect = await handler(to);

    loadingStore.end('middleware');
    return redirect;
});


export default router;
