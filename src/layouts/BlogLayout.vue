<script setup>
import blogs from '../assets/data/blogs.json';

import NextIcon from '../icons/Next.vue';
import PreviousIcon from '../icons/Previous.vue';
import BlogListIcon from '../icons/BlogList.vue';

import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';

const route = useRoute();
const blogId = route.params.blogid;
let postId = route.params.postid;

let previous, next;

const loadPreviousNext = () => {
  const postsArray = Object.keys(blogs[blogId].posts);
  const index = postsArray.indexOf(postId);

  previous = postsArray[index-1];
  next = postsArray[index+1];
};

loadPreviousNext();

watchEffect(() => {
  postId = route.params.postid;
  loadPreviousNext();
});
</script>

<template>

    <div class="container max-w-3xl mx-auto mb-32">
        <div class="animate__animated animate__fadeIn min-h-screen border border-gray-200 p-8 bg-white sm:rounded-3xl pb-12 mb-8 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            <slot />
        </div>

        <div class="flex items-center justify-between px-8">
            <div class="w-32 flex justify-start">
                <router-link v-if="previous" :to="`/blog/${blogId}/${previous}`" class="flex items-center bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-4 py-2 rounded-lg" aria-label="previous blog post"><PreviousIcon class="h-4 w-4 sm:mr-2" /><span class="hidden sm:block">Previous</span></router-link>
            </div>
            <div>
                <router-link :to="`/blog/${blogId}`" class="flex items-center bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-4 py-2 rounded-lg" aria-label="blog post list"><BlogListIcon class="h-4 w-4 sm:mr-2" /><span class="hidden sm:block">Blog List</span></router-link>
            </div>
            <div class="w-32 flex justify-end">
                <router-link v-if="next" :to="`/blog/${blogId}/${next}`" class="flex items-center bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-4 py-2 rounded-lg" aria-label="next blog post"><span class="hidden sm:block">Next</span><NextIcon class="h-4 w-4 sm:ml-2" /></router-link>
            </div>
        </div>
    </div>

</template>