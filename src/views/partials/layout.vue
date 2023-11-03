<script setup>
import Nav from "./nav.vue";
import Footer from "./footer.vue";
</script>

<template>
    <section class="px-6 py-8 h-full flex flex-col">
        <Nav/>
        <RouterView class="flex-grow"></RouterView>
        <Footer/>
    </section>
</template>
