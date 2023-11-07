<script setup>
import Logo from "@/components/logo.vue";
</script>

<template>
    <main class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo />
        <RouterView></RouterView>
    </main>
</template>
