<script setup>
import ThumbnailHeader from "./header.vue";
import ThumbnailFooter from "./footer.vue";
import Img from "@/components/img.vue";
import {computed} from "vue";

const props = defineProps({colSpan: Number, post: Object});
const to = computed(() => ({name: 'post', params: {slug: props.post.slug}}))
</script>

<template>
    <article class="thumbnail">
        <Img :src="post.img" class="flex-1"/>

        <div class="thumbnail-info">
            <ThumbnailHeader :category="post.category" :time="post.created_at" :title="post.title" :to="to"/>
            <div class="text-sm mt-4 space-y-4" v-html="post.excerpt"></div>
            <ThumbnailFooter :readMoreLink="to" :user="post.user"/>
        </div>
    </article>
</template>

<style scoped>
.thumbnail {
    @apply flex flex-col gap-8 p-6 h-full rounded-xl border border-black border-opacity-0 duration-300 transition-colors hover:border-opacity-5 hover:bg-gray-100
}

.thumbnail-info {
    @apply flex-1 flex flex-col justify-between
}
</style>
