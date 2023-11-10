<script setup>defineProps({active: {type: Boolean, default: false}})</script>

<template>
    <div
        :class="{
            'hover:bg-gray-300 focus:bg-gray-300': !active,
            'bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400': active,
            'text-left px-3 leading-6 whitespace-nowrap w-full': true
        }"
    >
        <slot/>
    </div>
</template>
