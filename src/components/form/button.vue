<script setup>defineProps({disabled: Boolean});</script>

<template>
    <button
        :class="{
                'flex justify-center items-center gap-2 w-full text-white font-medium rounded-lg text-sm px-5 py-2.5' : true,
                'bg-blue-500 hover:bg-blue-600' : !disabled,
                'bg-blue-400': disabled
        }"
        :disabled="disabled">
        <v-icon v-if="disabled" animation="spin-pulse" name="fa-spinner"/>
        <slot/>
    </button>
</template>
