<script setup>
import Profile from "@/components/profile.vue";
import CategoriesDropdown from "@/components/category/dropdown.vue";
import Search from "@/components/search.vue";
import ProfileSkeleton from "@/skeletons/profileSkeleton.vue";

import {usePostsStore} from "@/stores/usePostsStore.js";
import {useCategoriesStore} from "@/stores/useCategoriesStore.js";
import {useAuthorStore} from "@/stores/useAuthorStore.js";

const posts = usePostsStore();
const categories = useCategoriesStore();
const author = useAuthorStore();
</script>

<template>
    <header class="max-w-xl mx-auto mt-20 text-center">
        <div class="text-4xl">Latest <span class="text-blue-500">USee</span> News</div>

        <div v-if="author.doneInit & categories.doneInit">
            <Profile v-if="author.active" :author="author.active"/>
            <div class="header">
                <div class="header-item">
                    <CategoriesDropdown :disabled="!posts.doneInit"/>
                </div>
                <div class="header-item">
                    <Search :disabled="!posts.doneInit"/>
                </div>
            </div>
        </div>

        <div v-else class="animate-pulse">
            <ProfileSkeleton v-if="$route.query.author"/>
            <div class="header">
                <div v-for="index in 2" :key="index" class="header-item-placeholder"/>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    @apply space-y-2 lg:space-y-0 lg:space-x-4 mt-5
}

.header-item, .header-item-placeholder {
    @apply flex lg:inline-flex rounded-xl
}

.header-item {
    @apply bg-gray-100
}

.header-item-placeholder {
    @apply h-8 w-full bg-gray-200 lg:w-48
}
</style>
