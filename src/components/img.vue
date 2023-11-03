<script setup>defineProps({src: String})</script>

<template>
    <div class="overflow-hidden">
        <img :src="src" class="block rounded-xl border border-blue-50" alt="pic"/>
    </div>
</template>
