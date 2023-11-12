<script setup>
import Img from "@/components/img.vue";
import Button from "@/components/form/button.vue";
import {useAuthStore} from "@/stores/useAuthStore.js";

const auth = useAuthStore();

function onSubmit() {
    alert('coming soon');
}
</script>

<template>
    <div class="image-container">
        <!-- TODO : fallback source -->
        <Img :src="auth.user.img" class="w-full h-full" rounded-full/>
        <button class="edit-image-button" @click="onSubmit">
            <v-icon class="w-7 h-7" name="fa-pen"/>
        </button>
    </div>
</template>

<style scoped>
.image-container {
    @apply relative mx-auto max-w-[12rem] max-h-[12rem]
}

.edit-image-button {
    @apply
    p-2
    absolute
    bg-gray-200
    shadow
    border
    border-gray-300
    rounded-full
    bottom-0
    right-0
    -translate-x-2
    -translate-y-2
    hover:bg-gray-300
}
</style>

