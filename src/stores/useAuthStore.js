import {defineStore} from 'pinia';
import {computed, ref, watch} from "vue";
import User from '@/services/APIS/User.js';
import {useLocalStorage} from "@vueuse/core";


export const useAuthStore = defineStore('auth', () => {
    const key = 'x-auth-token';

    const user = ref(null);
    const doneInit = ref(false);

    const isAuth = computed(() => user.value !== null);

    async function init(force = false) {
        doneInit.value = false;

        if (!isAuth.value || force) {
            const token = localStorage.getItem(key);

            if (token) {
                try {
                    user.value = await User.show({token});
                } catch (e) {
                    localStorage.removeItem(key);
                }
            }
        }

        doneInit.value = true;
    }

    function attempt(credentials) {
        user.value = credentials;
        localStorage.setItem(key, credentials.token);
    }

    function reset() {
        localStorage.clear();
        user.value = null;
    }

    return {init, doneInit, user, isAuth, attempt, reset};
})
