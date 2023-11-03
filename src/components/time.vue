<script setup>
import moment from "moment";

defineProps({time: Number});
</script>

<template>
    <span class="mt-2 block text-gray-400 text-xs">
        Published <time v-text="moment(time).fromNow()"/>
    </span>
</template>
