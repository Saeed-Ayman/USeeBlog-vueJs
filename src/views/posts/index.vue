<script setup>
import Profile from "@/views/posts/header/profile.vue";
import ProfileSkeleton from "@/views/posts/header/profile-skeleton.vue";
import HeaderItem from "@/views/posts/header/item.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import Search from "@/views/posts/header/search.vue";
import PostThumbnail from './thumbnail/thumbnail.vue';
import PostThumbnailSkeleton from "@/views/posts/thumbnail/skeleton.vue";
import CategoriesDropdown from "@/components/category/dropdown.vue";

import {onMounted, onUnmounted, ref} from "vue";

import {useCategoriesStore} from "@/stores/useCategoriesStore.js";
import {usePostsStore} from "@/stores/usePostsStore.js";
import {useAuthorStore} from "@/stores/useAuthorStore.js";

const error = ref();

const posts = usePostsStore();
const categories = useCategoriesStore();
const author = useAuthorStore();

onMounted(async () => {
    await author.init();
    await categories.init();
    await posts.init();
})
</script>

<template>
    <div v-if="!error">
        <header class="max-w-xl mx-auto mt-20 text-center">
            <div class="text-4xl">Latest <span class="text-blue-500">USee</span> News</div>

            <Profile v-if="author.doneInit && author.active" :author="author.active"/>
            <ProfileSkeleton v-else-if="$route.query.author"/>

            <div v-if="categories.doneInit && author.doneInit"
                 class="space-y-2 lg:space-y-0 lg:space-x-4 mt-5">
                <HeaderItem>
                    <CategoriesDropdown :disabled="!posts.doneInit"/>
                </HeaderItem>

                <HeaderItem>
                    <Search :disabled="!posts.doneInit"/>
                </HeaderItem>
            </div>

            <div v-else-if="$route.query.author"
                 class="space-y-2 lg:space-y-0 lg:space-x-4 mt-5 animate-pulse">
                <HeaderItem class="h-8 w-full lg:w-36 bg-gray-200"/>
                <HeaderItem class="h-8 w-full lg:w-48 bg-gray-200"/>
            </div>
        </header>

        <main v-if="categories.all && author.doneInit" class="max-w-7xl mx-auto mt-6 space-y-6">
            <PostThumbnailSkeleton v-if="!posts.doneInit"/>

            <div v-else-if="posts.doneInit" class="lg:grid lg:grid-cols-6">
                <PostThumbnail v-for=" (post, index) of posts.all" :key="index" :big="index === 0" :class="{
                        'col-span-6': index === 0,
                        'col-span-3': index <= 2 && index !== 0,
                        'col-span-2': index > 2,
                    }" :post="post"/>
            </div>


            <div v-else class="flex justify-center items-center gap-4 my-20">
                <v-icon class="text-blue-500 w-6 h-6" name="md-error-round"/>
                <div class="font-semibold text-3xl text-blue-500">
                    Hmm, No Posts Here.
                </div>
            </div>
        </main>
    </div>
    <div v-else class="flex justify-center items-center gap-4 my-20">
        <v-icon class="text-red-600 w-6 h-6" name="md-error-round"/>
        <div class="font-semibold text-3xl text-red-600">
            {{ error }}
        </div>
    </div>
</template>
