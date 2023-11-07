<script setup>
import ThumbnailHeader from "./header.vue";
import ThumbnailFooter from "./footer.vue";
import Img from "@/components/img.vue";

defineProps({
    big: {default: false, type: Boolean},
    post: Object
});
</script>

<template>
    <article :class="{
            'lg:flex': big,
            'flex flex-col': !big,
            'transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl h-full py-6 px-5': true
        }">
        <Img :class="{ 'flex-1 lg:mr-8': big }" :src="post.img"/>

        <div :class="{
                'flex-1 mt-8 lg:mt-0': big,
                'flex-1 mt-8': !big,
                'flex flex-col justify-between': true
            }">
            <ThumbnailHeader :categories="[post.category]"
                             :time="post.created_at"
                             :title="post.title"
                             :to="{ name: 'post', params: { slug: post.slug } }"/>

            <div class="text-sm mt-4 space-y-4" v-html="post.excerpt"></div>

            <ThumbnailFooter :readMoreLink="{ name: 'post', params: { slug: post.slug } }"
                             :user="post.user"/>
        </div>
    </article>
</template>
