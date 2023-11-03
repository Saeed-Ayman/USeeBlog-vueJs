<script setup>
import Time from "@/components/time.vue";
import Categories from "../categories/categories.vue";

defineProps({title: String, to: Object, time: Number, categories: Array})
</script>
<template>
    <header>
        <Categories :categories="categories"/>
        <RouterLink :to="to" class="block mt-2 text-3xl font-semibold">{{ title }}</RouterLink>
        <Time :time="time"/>
    </header>
</template>
