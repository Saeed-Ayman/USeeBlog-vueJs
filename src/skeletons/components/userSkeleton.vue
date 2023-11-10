<script setup>
import TitleSkeleton from "@/skeletons/components/titleSkeleton.vue";
import Skeleton from "@/skeletons/components/skeleton.vue";
import ParagraphSkeleton from "@/skeletons/components/paragraphSkeleton.vue";
</script>
<template>
    <div class="flex-grow flex items-center gap-2">
        <Skeleton class="w-16 aspect-square !rounded-xl"/>
        <div class="flex-grow">
            <TitleSkeleton class="py-1.5 max-w-[200px]"/>
            <ParagraphSkeleton class="w-1/3 max-w-[180px]"/>
        </div>
    </div>
</template>
