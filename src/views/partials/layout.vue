<script setup>
import Nav from "./nav.vue";
import Footer from "./footer.vue";
import Error404 from "@/views/partials/error404.vue";
import {useErrorStore} from "@/stores/useErrorStore.js";

const errorStore = useErrorStore();
</script>

<template>
    <section class="px-6 py-8 h-full flex flex-col">
        <Nav/>
        <div class="flex-grow">
            <Error404 v-if="errorStore.status"/>
            <RouterView v-else/>
        </div>
        <Footer/>
    </section>
</template>
