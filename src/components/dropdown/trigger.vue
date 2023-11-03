<script setup>
defineProps({disabled: Boolean})
</script>

<template>
    <button :class="{
                'px-4 py-2 w-full font-semibold block flex items-center gap-2 rounded-xl': true,
                'justify-between': !disabled,
                'justify-start': disabled
            }"
            :disabled="disabled">
        <span v-if="disabled" class="text-blue-500">
            <v-icon animation="spin-pulse" name="fa-spinner"/>
        </span>

        <slot/>

        <span v-if="!disabled" class="text-blue-500 -mr-2">
            <v-icon name="md-keyboardarrowdown"/>
        </span>
    </button>
</template>
