<script setup>

import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useUpdateRouter} from "@/composables/useUpdateRouter.js";

defineProps({disabled: Boolean})

const route = useRoute();
const updateRouter = useUpdateRouter()
const search = ref(route.query.search);

watch(() => route.query.search, () => search.value = route.query.search);
</script>

<template>
    <div class="w-full flex relative">
        <input id="search"
               v-model="search"
               :disabled="disabled"
               class="bg-transparent flex-1 placeholder-black font-semibold text-sm w-full rounded-xl pl-4 pr-8 py-2"
               name="search"
               placeholder="Find something"
               type="text"
               @input="() => updateRouter('search', search)"/>

        <button class="absolute right-2 top-[5.5px]"
                :disabled="disabled"
                type="reset" @click="() => updateRouter('search', '')">

            <v-icon class="text-red-600 hover:text-white hover:bg-red-600 p-0.25 rounded-full"
                    name="ri-close-circle-line"/>
        </button>
    </div>
</template>
