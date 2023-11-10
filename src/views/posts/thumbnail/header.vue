<script setup>
import Time from "@/components/time.vue";
import Category from "@/components/category/category.vue";

defineProps({title: String, to: Object, time: Number, category: Object})
</script>
<template>
    <header>
        <Category :category="category"/>
        <RouterLink :to="to" class="title">{{ title }}</RouterLink>
        <Time :time="time"/>
    </header>
</template>

<style scoped>
.title {
    @apply inline-block mt-2 text-3xl font-semibold
}
</style>
