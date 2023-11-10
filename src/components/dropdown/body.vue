<script setup>defineProps({dir: {type: String, default: "ltr"}})</script>
<template>
    <div :class="{'left-0': dir === 'ltr', 'right-0': dir === 'rtl'}" class="body">
        <div class="w-fit min-w-full">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.body {
    @apply py-2 absolute bg-gray-100 rounded-xl top-11 min-w-full overflow-y-auto max-w-xl max-h-56 z-50 cursor-pointer
}

.body::-webkit-scrollbar {
    @apply w-2
}

.body::-webkit-scrollbar-track {
    @apply my-1.5
}

.body::-webkit-scrollbar-thumb {
    @apply bg-blue-500 rounded-full
}

.body::-webkit-scrollbar-thumb:hover {
    @apply bg-blue-600
}
</style>
