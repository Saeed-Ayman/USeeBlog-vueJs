<script setup>
import Form from "@/components/form/form.vue";
import HrWithText from "@/components/hrWithText.vue";
import Input from "@/components/form/input.vue";
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
        const email = e.target.email.value;

        await UserApi.update(auth.user.id, {
            name: e.target.name.value,
            email,
            username: '@' + email.substring(0, email.indexOf('@'))
        });

        await auth.init(true);
    }

    loading.value = false;
}
</script>

<template>
    <div>
        <HrWithText>Edit Information</HrWithText>
        <Form class="block" @submit.prevent="onSubmit">
            <Input :value="auth.user.name" name="Name"/>
            <Input :value="auth.user.email" name="Email"/>
            <Button :disabled="loading">Save</Button>
        </Form>
    </div>
</template>
