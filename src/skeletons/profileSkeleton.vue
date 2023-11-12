<script setup>
import Skeleton from "@/skeletons/components/skeleton.vue";
import TitleSkeleton from "@/skeletons/components/titleSkeleton.vue";
import ParagraphSkeleton from "@/skeletons/components/paragraphSkeleton.vue";
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-3 mb-5">
        <Skeleton class="w-36 h-6 my-3.5"/>
        <Skeleton class="w-48 h-48 !rounded-full"/>
        <TitleSkeleton class="w-36 !my-3"/>
        <ParagraphSkeleton class="w-28"/>
    </div>
</template>
