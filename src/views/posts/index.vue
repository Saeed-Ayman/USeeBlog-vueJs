<script setup>
import Header from "@/views/partials/header.vue";
import PostThumbnail from "@/components/thumbnail.vue";
import PostThumbnailSkeleton from "@/skeletons/postThumbnailSkeleton.vue";

import {usePostsStore} from "@/stores/usePostsStore.js";
import {useCategoriesStore} from "@/stores/useCategoriesStore.js";
import {useAuthorStore} from "@/stores/useAuthorStore.js";

const posts = usePostsStore();
const categories = useCategoriesStore();
const author = useAuthorStore();
</script>

<template>
    <Header/>
    <main v-if="author.doneInit & categories.doneInit" class="posts-container">
        <PostThumbnailSkeleton v-if="!posts.doneInit"/>
        <div v-else-if="posts.all.length" class="lg:grid lg:grid-cols-6">
            <PostThumbnail
                v-for=" (post, index) of posts.all"
                :key="index"
                :class="{
                        'lg:!flex-row col-span-6': index === 0,
                        'col-span-3': index === 1 || index === 2,
                        'col-span-2': index > 2
                    }"
                :post="post"/>
        </div>
        <div v-else class="message-container">
            <v-icon class="w-6 h-6" name="md-error-round"/>
            Hmm, No Posts Here.
        </div>
    </main>
</template>

<style scoped>
.posts-container {
    @apply max-w-7xl mx-auto mt-6 space-y-6
}

.message-container {
    @apply text-blue-500 font-semibold text-3xl flex justify-center items-center gap-4 h-48
}
</style>
