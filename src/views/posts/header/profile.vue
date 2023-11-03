<script setup>
import Img from "@/components/img.vue";

defineProps({author: Object});
</script>

<template>
    <div class="flex flex-col items-center justify-center text-sm mt-3 mb-5">
        <span class="text-3xl my-2">Written By</span>
        <Img :src="author.img" class="w-48 h-48 rounded-full bg-slate-300 border border-slate-300"/>
        <div class="font-bold text-2xl">{{ author.name }}</div>
        <div class="text-xl">{{ author.username }}</div>
    </div>
</template>
