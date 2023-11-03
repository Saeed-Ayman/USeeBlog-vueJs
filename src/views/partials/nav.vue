<script setup>
import Logo from "@/components/logo.vue";
</script>

<template>
    <nav>
        <div class="mx-auto max-w-screen-2xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
            <Logo/>

            <div class="flex justify-center items-center gap-2">
                <a class="text-xs font-bold uppercase whitespace-nowrap" href="/">
                    Log In
                </a>

                <!-- TODO : Extract this button -->
                <a class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5" href="#">
                    Register
                </a>
            </div>
        </div>
    </nav>
</template>
