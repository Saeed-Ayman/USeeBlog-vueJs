<script setup>
import Img from "./img.vue";
import ScrollToTop from "@/helpers/ScrollToTop.js";

defineProps({user: Object});
</script>

<template>
    <div class="flex items-center text-sm">
        <Img :src="user.img" class="w-16 h-16"/>
        <div class="ml-3">
            <RouterLink :to="'/?author=' + user.username"
                        class="font-bold"
                        @click="ScrollToTop">
                {{ user.name }}
            </RouterLink>
            <h6>{{ user.username }}</h6>
        </div>
    </div>
</template>
