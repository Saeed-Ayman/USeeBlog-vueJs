<template>
    <footer>
        <div class="mx-auto max-w-screen-2xl bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 px-10 my-5">
            <img alt="" class="mx-auto -mb-6" src="lary-newsletter-icon.png" style="width: 145px;">
            <h5 class="text-3xl">Stay in touch with the latest posts</h5>
            <p class="text-sm mt-3">Promise to keep the inbox clean. No bugs.</p>

            <div class="mt-10">
                <div class="relative inline-block mx-auto lg:bg-gray-200 rounded-full">

                    <form action="#" class="lg:flex text-sm" method="POST">
                        <div class="lg:py-3 lg:px-5 flex items-center">
                            <label class="hidden lg:inline-block" for="email">
                                <img alt="mailbox letter" src="mailbox-icon.svg">
                            </label>

                            <input id="email" class="lg:bg-transparent py-2 lg:py-0 pl-4 focus-within:outline-none" placeholder="Your email address"
                                   type="text">
                        </div>

                        <button class="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8"
                                type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
</script>
