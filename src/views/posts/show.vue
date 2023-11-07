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
    <main v-if="post" class="max-w-7xl mx-auto mt-10 lg:mt-20 space-y-6">
        <article class="lg:grid lg:grid-cols-12 gap-x-10">
            <div class="col-span-4 lg:text-center lg:pt-14 mb-5">
                <Img :src="post.img"/>
                <Time :time="post.created_at" class="mt-6 mb-4"/>
                <User :user="post.user" class="flex items-center lg:justify-center"/>
            </div>

            <div class="col-span-8">
                <div class="lg:flex justify-between">
                    <RouterLink :to="{ name: 'posts' }"
                                class="hidden lg:inline-flex transition-colors duration-300 relative items-center text-lg hover:text-blue-500">
                        <v-icon class="mr-2" name="md-keyboardarrowleft"/>
                        Back to Posts
                    </RouterLink>

                    <Categories :categories="[post.category]"/>
                </div>

                <h1 class="font-bold text-3xl lg:text-4xl my-5">
                    {{ post.title }}
                </h1>

                <div class="space-y-4 lg:text-lg leading-loose" v-html="post.body"></div>
            </div>
        </article>
    </main>

    <div v-else class="flex justify-center">
        <div class="flex-1 max-w-7xl mt-10 lg:mt-20 space-y-6 animate-pulse">
            <div class="lg:grid lg:grid-cols-12 gap-x-10">
                <div class="col-span-4 lg:pt-14 mb-5">
                    <div class="aspect-square bg-gray-200 rounded-xl"></div>
                    <div class="mt-6 mb-4 lg:mx-auto bg-gray-200 h-2 w-2/5 rounded"></div>

                    <div class="w-full flex lg:justify-center items-center">
                        <div class="w-16 h-16 bg-gray-200 rounded-xl"></div>
                        <div class="ml-4 w-[120px]">
                            <div class="h-3 bg-gray-300 rounded"></div>
                            <div class="mt-1 h-2 w-4/5 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
                <div class="col-span-8">
                    <div class="lg:flex justify-between items-center">
                        <div class="hidden lg:inline-block my-2.5 w-48 h-4 bg-gray-200 rounded"></div>

                        <div class="px-3 py-1 border border-blue-300 rounded-full w-24">
                            <div class="bg-blue-300 h-2 rounded-full"></div>
                        </div>
                    </div>

                    <div class="w-80 h-4 bg-gray-300 rounded my-5"></div>

                    <div class="space-y-5">
                        <div class="mt-4 space-y-2">
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/6"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-300 rounded w-3/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/6"></div>
                                <div class="h-3 bg-gray-200 rounded w-2/6"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-1/4"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/4"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/4"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-1/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                            </div>
                        </div>

                        <div class="mt-4 space-y-2">
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-1/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/6"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-1/4"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/4"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/4"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-300 rounded w-3/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/6"></div>
                                <div class="h-3 bg-gray-200 rounded w-2/6"></div>
                            </div>
                        </div>

                        <div class="mt-4 space-y-2">
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/6"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/6"></div>
                            </div>
                            <div class="w-full h-3 bg-gray-300 rounded space-x-2"></div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-1/4"></div>
                                <div class="h-3 bg-gray-300 rounded w-2/4"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/4"></div>
                            </div>
                            <div class="flex items-center w-full space-x-2">
                                <div class="h-3 bg-gray-200 rounded w-1/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-3/5"></div>
                                <div class="h-3 bg-gray-300 rounded w-1/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
