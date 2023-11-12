<script setup>
import LightLink from "@/components/nav/lightLink.vue";
import PrimaryLink from "@/components/nav/primaryLink.vue";
import {useErrorStore} from "@/stores/useErrorStore.js";

const errorStore = useErrorStore();
</script>

<template>
    <div class="my-10 min-h-[400px] flex flex-col justify-center items-center gap-6 h-full">
        <div class="sm:text-9xl text-5xl text-blue-500">{{ errorStore.status ?? 404 }}</div>
        <div class="flex justify-center items-center gap-2 text-red-600">
            <div><v-icon class="sm:w-7 sm:h-7" name="md-error-round"/></div>
            <div class="font-semibold sm:text-2xl text-xl">{{ errorStore.msg ?? 'Page Not Found!' }}</div>
        </div>
        <div class="mt-12 flex justify-center items-center flex-wrap gap-4">
            <LightLink :to="{name: 'home'}" class="!text-lg">
                <v-icon name="md-keyboardarrowleft" />
                Back To Home
            </LightLink>
            <PrimaryLink :to="{name: 'home'}" class="!text-lg">Report</PrimaryLink>
        </div>
    </div>
</template>

<style scoped>

</style>
