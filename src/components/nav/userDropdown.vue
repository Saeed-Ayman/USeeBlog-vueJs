<script setup>
import Img from "@/components/img.vue";
import Dropdown from "@/components/dropdown/dropdown.vue";
import DropdownItem from "@/components/dropdown/item.vue";

import {useRouter} from "vue-router";
import {useAuthStore} from "@/stores/useAuthStore.js";

const router = useRouter();
const auth = useAuthStore();

function profile() {
    router.push({name: 'posts', query: {author: auth.user.username}});
}

function logout() {
    auth.reset();
    router.push({name: 'home'});
}
</script>

<template>
    <Dropdown newClass="bg-gray-100">
        <template #trigger>
            <Img :src="auth.user.img" class="w-10 h-10"/>
            {{ auth.user.name }}
        </template>

        <DropdownItem @click="profile">Profile</DropdownItem>
        <DropdownItem @click="router.push({name: 'profile.settings'})">Settings</DropdownItem>
        <hr/>
        <DropdownItem @click="logout">Logout</DropdownItem>
    </Dropdown>
</template>
