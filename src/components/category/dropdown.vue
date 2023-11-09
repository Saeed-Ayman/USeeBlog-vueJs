<script setup>
import DropdownItem from "@/components/dropdown/item.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import {useCategoriesStore} from "@/stores/useCategoriesStore.js";
import {useUpdateRouter} from "@/composables/useUpdateRouter.js";

defineProps({disabled: Boolean})

const categories = useCategoriesStore();
const updateRouter = useUpdateRouter();
</script>

<template>
    <Dropdown
        :disabled="disabled"
        :triggerClass="{'ml-4': !disabled, 'mr-4': disabled, 'py-2 w-full': true}"
        classes="my-2">

        <template #trigger>{{ categories.active.name }}</template>

        <DropdownItem
            v-for="item of categories.all"
            :key="item.slug"
            :active="categories.active.slug === item.slug"
            @click="() => updateRouter('category', item.slug === 'all' ? '' : item.slug)">
            {{ item.name }}
        </DropdownItem>
    </Dropdown>
</template>
