<script setup>
import Logo from "@/components/logo.vue";
</script>

<template>
    <main class="flex flex-col items-center justify-center p-6 min-h-full">
        <Logo />
        <RouterView></RouterView>
    </main>
</template>
