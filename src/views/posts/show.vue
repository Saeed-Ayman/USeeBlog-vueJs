<script setup>
import Categories from "./categories/categories.vue";
import Img from "@/components/img.vue";
import Time from "@/components/time.vue";
import User from "@/components/user.vue";
import ApiPost from "@/services/APIS/Post";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const post = ref();
const route = useRoute();

onMounted(async () => post.value = await ApiPost.show(route.params.slug));
</script>

<template>
    <main class="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6" v-if="post">
        <article class="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
            <div class="col-span-4 lg:text-center lg:pt-14 mb-5">
                <Img :src="post.img" />
                <Time :time="post.created_at" class="mt-6 mb-4" />
                <User :user="post.author" class="flex items-center lg:justify-center" />
            </div>

            <div class="col-span-8">
                <div class="lg:flex justify-between">
                    <RouterLink :to="{ name: 'posts' }"
                        class="hidden lg:inline-flex transition-colors duration-300 relative items-center text-lg hover:text-blue-500">
                        <v-icon name="md-keyboardarrowleft" class="mr-2" />
                        Back to Posts
                    </RouterLink>

                    <Categories :categories="[post.category]" />
                </div>

                <h1 class="font-bold text-3xl lg:text-4xl my-5">
                    {{ post.title }}
                </h1>

                <div class="space-y-4 lg:text-lg leading-loose" v-html="post.body"></div>
            </div>
        </article>
    </main>
</template>
