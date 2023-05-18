<script setup>
import Plaque from './Plaque.vue';
</script>

<template>
    <footer>
        <div class="container mx-auto">
            <div class="border-t border-gray-200 dark:border-gray-700 mt-8 py-8">
                <div class="text-center sm:flex items-center justify-between mb-8">
                    <p class="mb-4">&copy; Copyright {{ new Date().getFullYear() }}, Nolan Pilon</p>
                    <nav class="mb-4">
                        <router-link to="/" class="mx-2 hover:opacity-70">About</router-link>
                        <router-link to="/projects" class="mx-2 hover:opacity-70">Projects</router-link>
                        <router-link to="/blog" class="mx-2 hover:opacity-70">Blog</router-link>
                        <router-link to="/resume" class="mx-2 hover:opacity-70">Resume</router-link>
                    </nav>
                </div>
                <Plaque class="mx-auto sm:mx-0" />
            </div>
        </div>
    </footer>
</template>