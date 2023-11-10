<script setup>
import PostThumbnail from "@/views/posts/thumbnail/thumbnail.vue";
import ThumbnailPostSkeleton from "@/skeletons/ThumbnailPostSkeleton.vue";

import {usePostsStore} from "@/stores/usePostsStore.js";
import {useCategoriesStore} from "@/stores/useCategoriesStore.js";
import {useAuthorStore} from "@/stores/useAuthorStore.js";

const posts = usePostsStore();
const categories = useCategoriesStore();
const author = useAuthorStore();
</script>

<template>
    <main v-if="author.doneInit & categories.doneInit" class="max-w-7xl mx-auto mt-6 space-y-6">
        <ThumbnailPostSkeleton v-if="!posts.doneInit"/>

        <div v-else-if="posts.all.length" class="lg:grid lg:grid-cols-6">
            <PostThumbnail v-for=" (post, index) of posts.all"
                           :key="index"
                           :class="{
                               'lg:!flex-row col-span-6': index === 0,
                               'col-span-3': index === 1 || index === 2,
                               'col-span-2': index > 2
                           }"
                           :post="post"/>
        </div>

        <div v-else class="text-blue-500 font-semibold text-3xl flex justify-center items-center gap-4 h-48">
            <v-icon class="w-6 h-6" name="md-error-round"/>
            Hmm, No Posts Here.
        </div>
    </main>
</template>
