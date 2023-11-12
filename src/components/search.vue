<script setup>

import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useUpdateRouter} from "@/composables/useUpdateRouter.js";

defineProps({disabled: Boolean})

const route = useRoute();
const updateRouter = useUpdateRouter()
const search = ref(route.query.search);

watch(() => route.query.search, () => search.value = route.query.search);

function updateSearchInput(value) {
    updateRouter('search', value)
}
</script>

<template>
    <div class="w-full flex relative">
        <label class="absolute left-2 top-[5.5px] pr-1 border-r" for="search">
            <v-icon name="bi-search"/>
        </label>

        <input id="search"
               v-model="search"
               :disabled="disabled"
               class="bg-transparent flex-1 font-semibold text-sm w-full rounded-xl px-9 py-2"
               name="search"
               placeholder="Find something"
               type="text"
               @input="updateSearchInput(search)"/>

        <button :disabled="disabled"
                class="absolute right-2 top-[5.5px]"
                type="reset" @click="updateSearchInput('')">
            <v-icon class="text-red-600 hover:text-white hover:bg-red-600 p-0.25 rounded-full"
                    name="ri-close-circle-line"/>
        </button>
    </div>
</template>
