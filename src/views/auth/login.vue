<script setup>
import Button from '@/components/form/button.vue';
import Link from '@/components/form/link.vue';
import Input from '@/components/form/input.vue';
import Title from '@/components/form/title.vue';
import Panel from '@/components/form/panel.vue';
import Form from '@/components/form/form.vue';
import P from '@/components/form/p.vue';

import {ref} from "vue";
import User from "@/services/APIS/User.js";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter} from "vue-router";

const auth = useAuthStore();
const disabled = ref(false);
const router = useRouter();

async function onSubmit(e) {
    disabled.value = true;

    try {
        auth.attempt(await User.show({
            email: e.target.email.value,
            password: e.target.password.value
        }));

        await router.push({name: 'home'});
    } catch (e) {
        disabled.value = false;
        alert(e);
    }
}
</script>

<template>
    <Title>Sign in to your account</Title>
    <Panel>
        <Form @submit.prevent="onSubmit">
            <Input name="Email"/>
            <div>
                <Link to="" class="block w-fit ml-auto"  v-text="'Forgot password?'"/>
                <Input class="mt-1" name="Password"/>
            </div>
            <Button :disabled="disabled">Sign in</Button>
        </Form>
    </Panel>
    <P>
        Don’t have an account yet?
        <Link :to="{name: 'register'}" v-text="'Register Now'"/>
    </P>
</template>
