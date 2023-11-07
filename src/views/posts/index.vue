<script setup>
import Profile from "@/views/posts/header/profile.vue";
import ProfileSkeleton from "@/views/posts/header/profile-skeleton.vue";
import HeaderItem from "@/views/posts/header/item.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import Search from "@/views/posts/header/search.vue";
import PostThumbnail from './thumbnail/thumbnail.vue';
import PostThumbnailSkeleton from "@/views/posts/thumbnail/skeleton.vue";

import ApiPost from "@/services/APIS/Post";
import ApiCategory from "@/services/APIS/Category";
import ApiAuthor from "@/services/APIS/User.js";

import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useUpdateRouter} from "@/composables/useUpdateRouter.js";

const posts = ref();
const error = ref();
const route = useRoute();
const categories = ref();
const category = ref();
const author = ref();
const updateRouter = useUpdateRouter();

onMounted(async () => {
    try {
        await updateAuthor();
        categories.value = await ApiCategory.index();
        await updateCategory();
        await updatePosts();
    } catch (e) {
        error.value = e;
    }
})

watch(() => route.query.category, async () => {
    error.value = posts.value = null;
    await updateCategory();
    await updatePosts();
});

watch(() => route.query.author, async () => {
    error.value = posts.value = null;
    await updateAuthor();
    await updatePosts();
})

const updateAuthor = async () => author.value = route.query.author ? await ApiAuthor.show({username: route.query.author}) : null;


function updateCategory() {
    category.value = route.query.category ?
        categories.value.find(c => c.slug === route.query.category) : categories.value.at(0);

    if (!category.value) throw 'Error: can\'t find category';
}

async function updatePosts() {
    const args = {};

    if (author.value) args.userId = author.value.id;
    if (category.value && category.value.slug !== 'all') args.categoryId = category.value.id;

    posts.value = await ApiPost.index(args);
}
</script>

<template>
    <div v-if="!error">
        <header class="max-w-xl mx-auto mt-20 text-center">
            <div class="text-4xl">Latest <span class="text-blue-500">USee</span> News</div>

            <Profile v-if="author" :author="author"/>
            <ProfileSkeleton v-else-if="$route.query.author"/>

            <div v-if="!category || ($route.query.author && !author)"
                 class="space-y-2 lg:space-y-0 lg:space-x-4 mt-5 animate-pulse">
                <HeaderItem class="h-8 w-full lg:w-36 bg-gray-200"/>
                <HeaderItem class="h-8 w-full lg:w-48 bg-gray-200"/>
            </div>

            <div v-else class="space-y-2 lg:space-y-0 lg:space-x-4 mt-5">
                <HeaderItem>
                    <Dropdown :active="category" :disabled="!posts" :items="categories"
                              @choose="(item) => updateRouter('category', item.slug === 'all' ? '' : item.slug)"/>
                </HeaderItem>

                <HeaderItem>
                    <Search :disabled="!posts"/>
                </HeaderItem>
            </div>
        </header>

        <main v-if="categories && (!$route.query.author || author)" class="max-w-7xl mx-auto mt-6 space-y-6">
            <PostThumbnailSkeleton v-if="!posts"/>

            <div v-else-if="posts.length" class="lg:grid lg:grid-cols-6">
                <PostThumbnail v-for=" (post, index) of posts" :key="index" :big="index === 0" :class="{
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
