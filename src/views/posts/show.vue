<script setup>
import Post from "@/components/post.vue";
import PostSkeleton from "@/skeletons/postSkeleton.vue";

import ApiPost from "@/services/APIS/Post";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useErrorStore} from "@/stores/useErrorStore.js";

const post = ref();
const route = useRoute();

onMounted(async () => {
    try {
        post.value = await ApiPost.show(route.params.slug);
    } catch (e) {
        useErrorStore().set(e);
    }
});
</script>

<template>
    <main class="max-w-7xl mx-auto mt-10 lg:mt-20 space-y-6">
        <Post v-if="post" :post="post"/>
        <PostSkeleton v-else/>
    </main>
</template>
