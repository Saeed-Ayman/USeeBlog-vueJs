<script setup>
import Img from "@/components/img.vue";
import Time from "@/components/time.vue";
import User from "@/components/user.vue";
import Category from "@/components/category/category.vue";

import {computed} from "vue";

const props = defineProps({colSpan: Number, post: Object});
const to = computed(() => ({name: 'post', params: {slug: props.post.slug}}))
</script>

<template>
    <article class="thumbnail">
        <Img :src="post.img" class="flex-1"/>

        <div class="thumbnail-info">
            <header>
                <Category :category="post.category"/>
                <RouterLink :to="to" class="title">{{ post.title }}</RouterLink>
                <Time :time="post.created_at"/>
            </header>

            <div class="excerpt" v-html="post.excerpt"></div>

            <footer class="footer">
                <User :user="post.user"/>
                <RouterLink :to="to" class="read-more-link">Read More</RouterLink>
            </footer>
        </div>
    </article>
</template>

<style scoped>
.title {
    @apply inline-block mt-2 text-3xl font-semibold
}

.excerpt {
    @apply text-sm mt-4 space-y-4
}

.footer {
    @apply flex flex-wrap gap-4 justify-between items-center mt-8
}

.thumbnail {
    @apply flex flex-col gap-8 p-6 h-full rounded-xl border border-black border-opacity-0 duration-300 transition-colors hover:border-opacity-5 hover:bg-gray-100
}

.thumbnail-info {
    @apply flex-1 flex flex-col justify-between
}

.read-more-link {
    @apply transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8
}
</style>
