<script setup>
import Logo from "@/components/logo.vue";
import UserDropdown from "@/components/nav/userDropdown.vue";
import LightLink from "@/components/nav/lightLink.vue";
import PrimaryLink from "@/components/nav/primaryLink.vue";

import {useAuthStore} from "@/stores/useAuthStore.js";

const auth = useAuthStore();
</script>

<template>
    <nav>
        <div class="mx-auto max-w-7xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
            <Logo/>
            <UserDropdown v-if="auth.isAuth"/>
            <div v-else class="flex justify-center items-center gap-2">
                <LightLink :to="{name: 'login'}">Log In</LightLink>
                <PrimaryLink :to="{name: 'register'}">Register</PrimaryLink>
            </div>
        </div>
    </nav>
</template>
