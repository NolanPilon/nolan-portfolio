<script setup>

defineProps({
    name: String,
    image: String,
    description: String,
    source: String,
    play: String
})

</script>

<template>
    <div class="bg-white border border-gray-200 rounded-3xl flex flex-col mb-8 dark:bg-gray-800 dark:border-gray-700">
        <img :src="`/assets/projects/${image}`" alt="" class="rounded-t-3xl aspect-video object-cover">
        <div class="p-8 h-full flex flex-col justify-between">
            <div>
                <h2 class="text-2xl font-black mb-2">{{ name }}</h2>
                <p>{{ description }}</p>
            </div>
            <a v-if="play" :href="play" target="_blank" class="bg-red-500 font-bold text-white px-4 py-2 rounded-lg block text-center mt-4 hover:bg-red-600">Play</a>
            <a v-else-if="source" :href="source" target="_blank" class="bg-gray-500 font-bold text-white px-4 py-2 rounded-lg block text-center mt-4 hover:bg-gray-600">Source Code</a>
        </div>
    </div>
</template>