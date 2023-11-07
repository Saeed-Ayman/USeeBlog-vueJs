<script setup>
import {computed} from "vue";

const props = defineProps({name: String});

const slug = computed(() => props.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '_')
    // .replace(/^-+|-+$/g, '')
);

const type = computed(() => {
    if (props.name.toLowerCase().indexOf('email') !== -1) return 'email';

    if (props.name.toLowerCase().indexOf('password') !== -1) return 'password';

    return 'text';
})
</script>

<template>
    <div class="relative">
        <input :id="slug"
               :name="slug"
               :type="type"
               class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" "
               required
        />
        <label
            :for="slug"
            class="absolute text-gray-500 bg-gray-100 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            {{ name }}
        </label>
    </div>
</template>
