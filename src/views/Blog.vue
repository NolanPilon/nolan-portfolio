<script setup>
import BlogCard from '../components/BlogCard.vue';
import blogs from '../assets/data/blogs.json';
</script>

<template>
    
    <section>
        <div class="animate__animated animate__fadeIn mx-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard v-for="(blog, index) in blogs" :key="index" 
                :link="`/blog/${index}`"
                :title="blog.title"
                :image="blog.image"
                :description="blog.description"
            />
        </div>
    </section>

</template>