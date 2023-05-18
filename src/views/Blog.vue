<script setup>
import BlogCard from '../components/BlogCard.vue';
import blogs from '../assets/data/blogs.json';
</script>

<template>
    
    <section>
        <div class="animate__animated animate__fadeIn px-8 sm:px-0 sm:grid grid-cols-3 gap-8">
            <BlogCard v-for="(blog, index) in blogs" :key="index" 
                :link="`/blog/${index}`"
                :title="blog.title"
                :image="blog.image"
                :description="blog.description"
            />
        </div>
    </section>

</template>