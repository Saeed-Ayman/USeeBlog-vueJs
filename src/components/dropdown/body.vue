<script setup>defineProps({dir: {type: String, default: "ltr"}})</script>
<template>
    <div
        :class="{
            'left-0': dir === 'ltr',
            'right-0': dir === 'rtl',
            'py-2 absolute bg-gray-100 rounded-xl top-11 min-w-full overflow-y-auto max-h-56 z-50 border border-gray-200 shadow-xl cursor-pointer' : true
        }"
    >
        <slot/>
    </div>
</template>
