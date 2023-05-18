<script setup>

defineProps({
    link: String,
    title: String,
    image: String,
    description: String,
})

</script>

<template>
    <router-link :to="link" class="bg-white border border-gray-200 rounded-3xl flex flex-col mb-8 dark:bg-gray-800 dark:border-gray-700 hover:brightness-95 dark:hover:opacity-75 transition-all duration-300">
        <img :src="image" alt="" class="rounded-t-3xl aspect-video object-cover">
        <div class="p-8 h-full flex flex-col justify-between">
            <div>
                <h2 class="text-2xl font-black mb-2 text-center">{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
    </router-link>
</template>