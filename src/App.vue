<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
    <main class="min-h-screen pt-8 pb-32">
        <div class="container mx-auto">
            <router-view />
        </div>
    </main>
    <Footer />
</template>