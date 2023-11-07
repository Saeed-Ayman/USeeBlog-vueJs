import {defineStore} from 'pinia';
import {computed, onBeforeMount, ref} from "vue";
import User from '@/services/APIS/User.js';


export const useAuthStore = defineStore('auth', () => {
    const key = 'x-auth-token';
    const user = ref(null);
    const isAuth = computed(() => user.value !== null);

    onBeforeMount(async () => {
        const token = localStorage.getItem(key);

        if (token) {
            try {
                user.value = await User.show({token});
            } catch {
                localStorage.removeItem(key);
            }
        }
    })

    function attempt(credentials) {
        user.value = credentials;
        localStorage.setItem(key, credentials.token);
    }

    function reset() {
        localStorage.clear();
        user.value = null;
    }

    return {user, isAuth, attempt, reset};
})
