<script setup>
import UserSkeleton from "@/skeletons/components/userSkeleton.vue";
import Skeleton from "@/skeletons/components/skeleton.vue";
import CategorySkeleton from "@/skeletons/components/categorySkeleton.vue";
import TitleSkeleton from "@/skeletons/components/titleSkeleton.vue";
import TimeSkeleton from "@/skeletons/components/timeSkeleton.vue";
import ParagraphSkeleton from "@/skeletons/components/paragraphSkeleton.vue";
</script>

<template>
    <article class="p-5 h-full flex flex-col lg:flex-row animate-pulse gap-4">
        <Skeleton class="flex-1 rounded-xl min-h-[400px]"/>

        <div class="flex-1 flex flex-col justify-between gap-4">
            <div>
                <CategorySkeleton/>

                <div class="mt-3">
                    <TitleSkeleton/>
                    <TitleSkeleton class="w-1/3"/>
                    <TimeSkeleton class="w-1/5"/>
                </div>
            </div>

            <div>
                <ParagraphSkeleton/>
                <ParagraphSkeleton class="w-3/6"/>
                <ParagraphSkeleton/>
                <ParagraphSkeleton/>
                <ParagraphSkeleton/>
                <ParagraphSkeleton class="w-1/6"/>
                <ParagraphSkeleton/>
                <ParagraphSkeleton class="w-5/6"/>
            </div>

            <div class="flex flex-wrap justify-between items-center gap-4">
                <UserSkeleton/>
                <ParagraphSkeleton class="hidden sm:block w-32 !rounded-full py-2"/>
            </div>
        </div>
    </article>
</template>
