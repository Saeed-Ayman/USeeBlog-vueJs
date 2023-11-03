<script setup>
import Category from "./category.vue";

defineProps({categories: Array});
</script>

<template>
    <div class="space-x-2">
        <Category
            v-for="category of categories"
            :key="category.slug"
            :to="'/?category=' + category.slug"
        >
            {{ category.name }}
        </Category>
    </div>
</template>
