<script setup>
import scrollToTop from "@/helpers/ScrollToTop.js";

defineProps({category: Object});
</script>

<template>
    <div>
        <RouterLink :to="'/?category=' + category.slug" class="category" @click="scrollToTop">
            {{ category.name }}
        </RouterLink>
    </div>
</template>

<style scoped>
.category {
    @apply px-3 py-1 border border-blue-300 rounded-full text-blue-300 uppercase font-semibold text-[10px]
}
</style>
