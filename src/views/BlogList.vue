<script setup>
import BlogCard from '../components/BlogCard.vue';
import blogs from '../assets/data/blogs.json';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const blogId = route.params.blogid;
const router = useRouter();

const blog = blogs[blogId];
let blogPosts;

if (blog === undefined) {
  router.push({ name: 'Blog' });
} else {
  blogPosts = blogs[blogId].posts;
}

// Blog Title
document.title = `${blogId.replaceAll("-", " ").replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})} | Blog`;
</script>

<template>
    
    <section>
        <div class="animate__animated animate__fadeIn px-8 sm:px-0 sm:grid grid-cols-3 gap-8">
            <BlogCard v-for="(blog, index) in blogPosts" :key="index" 
                :link="`/blog/${blogId}/${index}`"
                :title="blog.title"
                :image="blog.image"
                :description="blog.description"
            />
        </div>
    </section>

</template>