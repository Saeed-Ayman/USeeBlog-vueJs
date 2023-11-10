<script setup>defineProps({src: String, roundedFull: Boolean})</script>

<template>
    <div>
        <img :class="{'rounded-xl': !roundedFull, 'rounded-full': roundedFull}"
             :src="src"
             alt="pic"
             class="block border border-blue-50: true"/>
    </div>
</template>
