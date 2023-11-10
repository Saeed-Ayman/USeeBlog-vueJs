<script setup>
import Profile from "@/views/posts/header/profile.vue";
import CategoriesDropdown from "@/components/category/dropdown.vue";
import ProfileSkeleton from "@/views/posts/header/profile-skeleton.vue";
import Search from "@/views/posts/header/search.vue";
import HeaderItem from "@/views/posts/header/item.vue";

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

            <div class="space-y-2 lg:space-y-0 lg:space-x-4 mt-5">
                <HeaderItem>
                    <CategoriesDropdown :disabled="!posts.doneInit"/>
                </HeaderItem>

                <HeaderItem>
                    <Search :disabled="!posts.doneInit"/>
                </HeaderItem>
            </div>
        </div>

        <div v-else>
            <ProfileSkeleton v-if="$route.query.author"/>

            <div class="space-y-2 lg:space-y-0 lg:space-x-4 mt-5 animate-pulse">
                <HeaderItem class="h-8 w-full lg:w-36 bg-gray-200"/>
                <HeaderItem class="h-8 w-full lg:w-48 bg-gray-200"/>
            </div>
        </div>
    </header>
</template>
