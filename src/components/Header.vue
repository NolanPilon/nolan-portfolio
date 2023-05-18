<script setup>
import GithubIcon from '../icons/Github.vue';
import DarkmodeSwitcher from './DarkmodeSwitcher.vue';
</script>

<template>
    <header class="p-4">
        <div class="container mx-auto">
            <div class="relative px-8 py-0 sm:py-4 rounded-xl bg-secondary border border-secondary">
                <div class="py-4 absolute top-0 left-8 flex h-full flex-col justify-center">
                    <DarkmodeSwitcher />
                </div>
                <nav class="text-center">
                    <router-link to="/" class="block my-4 sm:my-0 sm:inline-block mx-4 font-bold text-xl hover:opacity-70">About</router-link>
                    <router-link to="/projects" class="block my-4 sm:my-0 sm:inline-block mx-4 font-bold text-xl hover:opacity-70">Projects</router-link>
                    <router-link to="/blog" class="block my-4 sm:my-0 sm:inline-block mx-4 font-bold text-xl hover:opacity-70">Blog</router-link>
                    <router-link to="/resume" class="block my-4 sm:my-0 sm:inline-block mx-4 font-bold text-xl hover:opacity-70">Resume</router-link>
                </nav>
                <div class="py-4 absolute top-0 right-8 flex h-full flex-col justify-center">
                    <a href="https://github.com/NolanPilon" target="_blank" class="hover:brightness-50 transition-all duration-300" aria-label="GitHub">
                        <GithubIcon class="h-6 w-6" />
                    </a>
                </div>

            </div>
        </div>
    </header>
</template>

<style scoped>
</style>