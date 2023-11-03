<script setup>
import User from "@/components/user.vue";

defineProps({user: Object, readMoreLink: Object});
</script>
<template>
    <footer class="flex flex-wrap gap-4 justify-between items-center mt-8">
        <User :user="user"/>

        <RouterLink :to="readMoreLink"
                    class="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8">
            Read More
        </RouterLink>
    </footer>
</template>
