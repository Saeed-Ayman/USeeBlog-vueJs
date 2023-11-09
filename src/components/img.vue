<script setup>defineProps({src: String, roundedFull: Boolean})</script>

<template>
    <div class="overflow-hidden">
        <img :class="{
            'rounded-xl': !roundedFull,
            'rounded-full': roundedFull,
            'block border border-blue-50': true,
        }" :src="src" alt="pic"/>
    </div>
</template>
