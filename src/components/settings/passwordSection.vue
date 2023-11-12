<script setup>
import Form from "@/components/form/form.vue";
import HrWithText from "@/components/hrWithText.vue";
import Input from "@/components/form/input.vue";
import Button from "@/components/form/button.vue";

import UserApi from "@/services/APIS/User.js";
import {ref} from "vue";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter} from "vue-router";

const loading = ref(false);

const auth = useAuthStore();
const router = useRouter();
async function onSubmit(e) {
    loading.value = true;

    if (e.target.old_password.value !== auth.user.password) {
        alert('wrong password!');
    } else if (e.target.new_password.value && e.target.new_password.value === e.target.password_confirmation.value) {
        await UserApi.update(auth.user.id, {password: e.target.new_password.value});
        await auth.init(true);
    } else alert('new and confirmation password not the same or empty!');

    loading.value = false;
}
</script>

<template>
    <div>
        <HrWithText>Edit Password</HrWithText>
        <Form class="block" @submit.prevent="onSubmit">
            <Input name="Old Password"/>
            <Input name="New Password"/>
            <Input name="Password Confirmation"/>
            <Button :disabled="loading">Save</Button>
        </Form>
    </div>
</template>

