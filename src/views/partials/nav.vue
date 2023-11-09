<script setup>
import Logo from "@/components/logo.vue";
import Img from "@/components/img.vue";
import Dropdown from "@/components/dropdown/dropdown.vue"
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter} from "vue-router";
import DropdownItem from "@/components/dropdown/item.vue";
import DropdownTrigger from "@/components/dropdown/trigger.vue";
import DropdownBody from "@/components/dropdown/body.vue";
import {ref} from "vue";


import {vOnClickOutside} from '@vueuse/components'


const auth = useAuthStore();
const router = useRouter();
const show = ref(false);

function logout() {
    auth.reset();
    router.push({name: 'home'});
}
</script>

<template>
    <nav>
        <div class="mx-auto max-w-7xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
            <Logo/>

            <Dropdown v-if="auth.isAuth" newClass="bg-gray-100">
                <template #trigger>
                    <Img :src="auth.user.img" class="w-10 h-10"/>
                    {{ auth.user.name }}
                </template>

                <DropdownItem
                    @click="$router.push({name: 'posts', query: {author: auth.user.username}}); show = false;">
                    Profile
                </DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <hr/>
                <DropdownItem @click="logout">Logout</DropdownItem>
            </Dropdown>


            <div v-else class="flex justify-center items-center gap-2">
                <RouterLink :to="{name: 'login'}" class="text-xs font-bold uppercase whitespace-nowrap">
                    Log In
                </RouterLink>

                <!-- TODO : Extract this button -->
                <RouterLink :to="{name: 'register'}"
                            class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
                    Register
                </RouterLink>
            </div>
        </div>
    </nav>
</template>
