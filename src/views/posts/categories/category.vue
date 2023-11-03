<script setup>
import scrollToTop from "@/helpers/ScrollToTop.js";

defineProps({to: String})
</script>

<template>
    <RouterLink :to="to"
                class="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                style="font-size: 10px"
                @click="scrollToTop()">
        <slot/>
    </RouterLink>
</template>
