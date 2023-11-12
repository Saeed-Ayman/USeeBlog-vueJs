<script setup>
import HrWithText from "@/components/hrWithText.vue";
import Button from "@/components/form/button.vue";

import UserApi from "@/services/APIS/User.js";
import {ref} from "vue";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter} from "vue-router";
import ConfirmPassword from "@/helpers/ConfirmPassword.js";

const loading = ref(false);

const auth = useAuthStore();
const router = useRouter();

async function onSubmit(e) {
    loading.value = true;

    if (ConfirmPassword()) {
        await UserApi.destroy(auth.user.id);
        auth.reset();
        await router.push({name: "home"});
    }

    loading.value = false;
}
</script>

<template>
    <div>
        <HrWithText>Delete Account</HrWithText>
        <Button :disabled="loading"
                class="bg-red-500 hover:bg-red-600"
                @click="onSubmit">
            Delete Account
        </Button>
    </div>
</template>
