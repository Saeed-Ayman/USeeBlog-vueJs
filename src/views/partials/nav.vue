<script setup>
import Logo from "@/components/logo.vue";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter} from "vue-router";

const auth = useAuthStore();
const router = useRouter();

function logout() {
    auth.reset();
    router.push({name: 'home'});
}
</script>

<template>
    <nav>
        <div class="mx-auto max-w-7xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
            <Logo/>

            <div v-if="auth.isAuth" class="flex justify-center items-center gap-2">
                {{ auth.user.name }}
                <button class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5"
                        @click="logout">
                    Logout
                </button>
            </div>
            <div v-else class="flex justify-center items-center gap-2">
                <RouterLink :to="{name: 'login'}" class="text-xs font-bold uppercase whitespace-nowrap">
                    Log In
                </RouterLink>

                <!-- TODO : Extract this button -->
                <RouterLink :to="{name: 'register'}"
                            class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
                    Register
                </RouterLink>
            </div>
        </div>
    </nav>
</template>
