<script setup>
import moment from "moment";

defineProps({time: Number});
</script>

<template>
    <span class="time">Published <time v-text="moment(time).fromNow()"/></span>
</template>

<style scoped>
.time {
    @apply mt-2 block text-gray-400 text-xs
}
</style>
