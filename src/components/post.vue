<script setup>
import Category from "@/components/category/category.vue";
import User from "@/components/user.vue";
import Time from "@/components/time.vue";
import Img from "@/components/img.vue";

defineProps({post: Object})
</script>

<template>
    <article class="post">
        <div class="sidebar-post">
            <Img :src="post.img"/>
            <Time :time="post.created_at" class="mt-6 mb-4"/>
            <User :user="post.user" class="lg:justify-center"/>
        </div>

        <div class="col-span-8">
            <div class="lg:flex justify-between">
                <RouterLink :to="{ name: 'posts' }" class="back-link">
                    <v-icon class="mr-2" name="md-keyboardarrowleft"/>
                    Back to Posts
                </RouterLink>
                <Category :category="post.category"/>
            </div>

            <h1 class="post-title">{{ post.title }}</h1>
            <div class="post-content" v-html="post.body"></div>
        </div>
    </article>
</template>

<style scoped>
.post {
    @apply lg:grid lg:grid-cols-12 gap-x-10
}

.post-title {
    @apply font-bold text-3xl lg:text-4xl my-5
}

.post-content {
    @apply space-y-4 lg:text-lg leading-loose
}

.sidebar-post {
    @apply col-span-4 lg:text-center lg:pt-14 mb-5
}

.back-link {
    @apply hidden lg:inline-flex transition-colors duration-300 relative items-center text-lg hover:text-blue-500
}
</style>
