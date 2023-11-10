<script setup>
import Nav from "./nav.vue";
import Footer from "./footer.vue";
import PrimaryLink from "@/components/nav/primaryLink.vue";
import LightLink from "@/components/nav/lightLink.vue";
import {useErrorStore} from "@/stores/useErrorStore.js";

const errorStore = useErrorStore();
</script>

<template>
    <section class="px-6 py-8 h-full flex flex-col">
        <Nav/>
        <div class="flex-grow">
            <div v-if="errorStore.status" class="my-10 min-h-[400px] flex flex-col justify-center items-center gap-6 h-full">
                <div class="sm:text-9xl text-5xl text-blue-500">{{ errorStore.status }}</div>
                <div class="flex justify-center items-center gap-2 text-red-600">
                    <div><v-icon class="sm:w-7 sm:h-7" name="md-error-round"/></div>
                    <div class="font-semibold sm:text-2xl text-xl">{{ errorStore.msg }}</div>
                </div>
                <div class="mt-12 flex justify-center items-center flex-wrap gap-4">
                    <LightLink :to="{name: 'home'}" class="!text-lg">
                        <v-icon name="md-keyboardarrowleft" />
                        Back To Home
                    </LightLink>
                    <PrimaryLink :to="{name: 'home'}" class="!text-lg">Report</PrimaryLink>
                </div>
            </div>
            <RouterView v-else ></RouterView>
        </div>
        <Footer/>
    </section>
</template>
