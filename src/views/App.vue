<script setup>
import Logo from '@/components/logo.vue';
import {useLoadingStore} from "@/stores/useLoadingStore.js";

const loadingStore = useLoadingStore();
</script>

<template>
    <div v-if="loadingStore.loading"
         class="min-h-full flex flex-col justify-center items-center gap-5 bg-gray-100">
        <Logo class="pointer-events-none"/>
        <div class="flex justify-center items-center gap-2">
            <v-icon animation="spin-pulse" class="text-blue-500" name="fa-spinner"/>
            Loading
        </div>
    </div>
    <RouterView v-else/>
</template>
