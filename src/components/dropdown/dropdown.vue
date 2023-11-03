<script setup>
import DropdownItem from "./item.vue";
import DropdownTrigger from "./trigger.vue";
import DropdownBody from "./body.vue";

import {vOnClickOutside} from '@vueuse/components'
import {ref} from "vue";

const props = defineProps({
    dir: String,
    items: Array,
    active: Object,
    disabled: Boolean,
});

const emit = defineEmits(['choose'])

const show = ref(false);

function click(item) {
    show.value = false;
    if (props.disabled) return;
    emit('choose', item);
}
</script>

<template>
    <div ref="dropdown" v-on-click-outside="() => show = false" class="text-sm relative w-full">
        <DropdownTrigger :disabled="disabled" @click="() => show = !show">
            {{active.name }}
        </DropdownTrigger>

        <DropdownBody v-show="show" :dir="dir">
            <DropdownItem v-for="item of items"
                          :key="item.slug"
                          :active="active.slug === item.slug"
                          @click="() => click(item)"
            >
                {{ item.name }}
            </DropdownItem>
        </DropdownBody>
    </div>
</template>
