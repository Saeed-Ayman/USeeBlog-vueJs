import {useAuthStore} from "@/stores/useAuthStore.js";

export function handler() {
    if (useAuthStore().isAuth) return {name: 'home'};
}
