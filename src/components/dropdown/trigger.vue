<script setup>
defineProps({disabled: Boolean, classes: [String, Object]})
</script>

<template>
    <button :class="{
                'w-full lg:max-w-[300px] font-semibold block flex items-center gap-2 rounded-xl': true,
                'justify-between': !disabled,
                'justify-start': disabled
            }"
            :disabled="disabled">
        <div v-if="disabled" class="text-blue-500 ml-2">
            <v-icon animation="spin-pulse" name="fa-spinner"/>
        </div>

        <div :class="classes" class="truncate flex items-center gap-2">
            <slot />
        </div>

        <div v-if="!disabled" class="text-blue-500 mr-2">
            <v-icon name="md-keyboardarrowdown"/>
        </div>
    </button>
</template>
