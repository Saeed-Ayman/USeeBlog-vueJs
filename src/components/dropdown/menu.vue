<script setup>
import DropdownItem from "./item.vue";
import DropdownTrigger from "./trigger.vue";
import DropdownBody from "./body.vue";

import {vOnClickOutside} from '@vueuse/components'
import {ref} from "vue";
import Button from "@/components/form/button.vue";

defineProps({
    dir: {type: String, default: "rtl"},
    disabled: {type: Boolean, default: false},
    triggerClass: [Object, String],
    bodyClass: [Object, String]
});

const show = ref(false);
</script>

<template>
    <div v-on-click-outside="() => show = false" class="text-sm">
        <button :class="triggerClass" class="hover:text-gray-500" @click="() => show = !show">
            <v-icon name="bi-three-dots-vertical"/>
        </button>

        <DropdownBody v-show="show" :class="bodyClass" :dir="dir" @click="() => show = false">
            <slot/>
        </DropdownBody>
    </div>
</template>
