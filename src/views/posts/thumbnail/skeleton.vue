<template>
    <article
        class="animate-pulse transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl py-6 px-5 lg:flex">
        <div class="flex-1 lg:mr-8 bg-gray-200 rounded-xl" style="height: 320px"></div>

        <div class="flex flex-col justify-between flex-1 mt-8 lg:mt-0">
            <div>
                <div class="px-3 py-1 border border-blue-300 rounded-full w-24">
                    <div class="bg-blue-300 h-2 rounded-full"></div>
                </div>

                <div class="mt-4">
                    <div class="h-4 bg-gray-300 rounded"></div>
                    <div class="mt-1 w-1/3 h-4 bg-gray-300 rounded"></div>
                    <div class="mt-2 bg-gray-200 h-2 w-1/5 rounded"></div>
                </div>
            </div>

            <div class="text-sm mt-4 space-y-1">
                <div class="h-3 bg-gray-200 rounded"></div>
                <div class="w-4/6 h-3 bg-gray-200 rounded"></div>
                <div class="h-0.5"></div>
                <div class="w-5/8 h-3 bg-gray-200 rounded"></div>
                <div class="h-3 bg-gray-200 rounded"></div>
                <div class="w-5/6 h-3 bg-gray-200 rounded"></div>
            </div>

            <div class="flex flex-wrap gap-4 justify-between items-center mt-8">
                <div class="flex-grow flex items-center">
                    <div class="w-16 h-16 bg-gray-200 rounded-xl rounded"></div>
                    <div class="ml-3 flex-grow">
                        <div class="h-3 sm:w-2/5 bg-gray-300 rounded" style="min-width: 100px"></div>
                        <div class="mt-1 h-2 sm:w-1/5 w-4/5 bg-gray-200 rounded"></div>
                    </div>
                </div>

                <div class="bg-gray-300 w-32 rounded-full py-2 px-8 rounded"></div>
            </div>
        </div>
    </article>
</template>