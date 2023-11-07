<script setup>
import {computed} from "vue";

const props = defineProps({name: String});

const slug = computed(() => props.name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '_')
    .replace(/^-+|-+$/g, '')
);
</script>

<template>
    <div class="flex items-start">
        <div class="flex items-center h-5">
            <input :id="slug"
                   class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                   type="checkbox">
        </div>
        <div class="ml-3 text-sm">
            <label :for="slug" class="text-gray-500 cursor-pointer capitalize">{{ name }}</label>
        </div>
    </div>
</template>
