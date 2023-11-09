<script setup>
import Button from '@/components/form/button.vue';
import Link from '@/components/form/link.vue';
import Input from '@/components/form/input.vue';
import Title from '@/components/form/title.vue';
import Panel from '@/components/form/panel.vue';
import Form from '@/components/form/form.vue';
import P from '@/components/form/p.vue';

import {ref} from 'vue';
import User from '@/services/APIS/User.js';
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter} from "vue-router";

const disabled = ref(false);
const auth = useAuthStore();
const router = useRouter();

async function onSubmit(e) {
    disabled.value = true;

    try {
        auth.attempt(await User.store({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }));

        await router.push({name: 'home'});
    } catch (e) {
        disabled.value = false;
        alert(e);
    }
}
</script>

<template>
    <Title>Create your Account</Title>
    <Panel>
        <Form @submit.prevent="onSubmit">
            <Input name="Name"/>
            <Input name="Email"/>
            <Input name="Password"/>
            <Input name="Password Confirmation"/>

            <Button :disabled="disabled">Register</Button>
        </Form>
    </Panel>
    <P>
        Already have an account?
        <Link :to="{name: 'login'}" v-text="'Login here'"/>
    </P>
</template>
