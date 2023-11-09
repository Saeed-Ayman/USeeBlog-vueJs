<script setup>
import DropdownItem from "./item.vue";
import DropdownTrigger from "./trigger.vue";
import DropdownBody from "./body.vue";

import {vOnClickOutside} from '@vueuse/components'
import {ref} from "vue";

defineProps({
    dir: String, disabled: {type: Boolean, default: false}, triggerClass:  [Object, String], newClass: [Object, String]
});

const show = ref(false);
</script>

<template>
    <div v-on-click-outside="() => show = false" class="text-sm relative">
        <DropdownTrigger :class="newClass" :classes="triggerClass" :disabled="disabled" @click="() => show = !show">
            <slot name="trigger"/>
        </DropdownTrigger>

        <DropdownBody v-show="show" :dir="dir" @click="() => show = false">
            <slot/>
        </DropdownBody>
    </div>
</template>
