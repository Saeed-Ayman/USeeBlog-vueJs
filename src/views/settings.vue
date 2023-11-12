<script setup>
import Panel from "@/components/form/panel.vue";
import ImageSection from "@/components/settings/imageSection.vue";
import InfoSection from "@/components/settings/infoSection.vue";
import PasswordSection from "@/components/settings/passwordSection.vue";
import DeleteAccountSection from "@/components/settings/deleteAccountSection.vue";
</script>

<template>
    <Panel class="mx-auto my-10 sm:max-w-xl">
        <div class="flex flex-col gap-10">
            <ImageSection/>
            <InfoSection/>
            <PasswordSection/>
            <DeleteAccountSection/>
        </div>
    </Panel>
</template>
