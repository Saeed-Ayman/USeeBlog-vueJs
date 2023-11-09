<script setup>
import Logo from '@/components/logo.vue';
import {useAuthStore} from "@/stores/useAuthStore.js";

const auth = useAuthStore();
</script>

<template>
    <RouterView v-if="auth.doneInit" />
    <div v-else class="min-h-full flex flex-col justify-center items-center gap-5 bg-gray-100">
        <Logo class="pointer-events-none" />
        <div class="flex justify-center items-center gap-2">
            <v-icon animation="spin-pulse" name="fa-spinner" class="text-blue-500"/>
            Loading
        </div>
    </div>
</template>
