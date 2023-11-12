<script setup>
import TimeSkeleton from "@/skeletons/components/timeSkeleton.vue";
import UserSkeleton from "@/skeletons/components/userSkeleton.vue";
import CategorySkeleton from "@/skeletons/components/categorySkeleton.vue";
import ExcerptSkeleton from "@/skeletons/components/excerptSkeleton.vue";
import TitleSkeleton from "@/skeletons/components/titleSkeleton.vue";
import ThumbnailImageSkeleton from "@/skeletons/components/thumbnailImageSkeleton.vue";
</script>

<template>
    <div class="lg:grid lg:grid-cols-12 gap-x-10 animate-pulse">
        <div class="col-span-4 lg:pt-14 mb-5">
            <ThumbnailImageSkeleton/>
            <TimeSkeleton class="my-6 mb-4 lg:mx-auto"/>
            <UserSkeleton class="lg:mx-[20%]"/>
        </div>

        <div class="col-span-8">
            <div class="lg:flex justify-between items-center">
                <TitleSkeleton class="hidden lg:inline-block !my-2.5 w-48"/>
                <CategorySkeleton/>
            </div>

            <TitleSkeleton class="min-[400px]:w-3/5 w-full !my-5"/>
            <ExcerptSkeleton v-for="index in 3" :key="index" class="mb-5"/>
        </div>
    </div>
</template>
