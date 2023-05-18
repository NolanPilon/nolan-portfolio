<script setup>
import BlogLayout from '../layouts/BlogLayout.vue';
import { useRoute, useRouter } from 'vue-router';
import { toRefs, reactive, watchEffect } from 'vue';
import { marked } from 'marked';
import axios from 'axios';

const route = useRoute();
const blogId = route.params.blogid;
let postId = route.params.postid;
const router = useRouter();

const html = reactive({
  value: '',
});

const htmlRef = toRefs(html);

const loadMarkdown = async () => {
  try {
    const res = await axios.get(`/blog/${blogId}/${postId}.md`);
    const text = res.data;
    html.value = marked(text, { mangle: false, headerIds: false });
  } catch (error) {
    router.push({ name: 'BlogList', params: {"blogid": blogId} });
  }
};

loadMarkdown();

watchEffect(() => {
  postId = route.params.postid;
  loadMarkdown();
  setTitle(); // Blog Title
});


// Blog Title
function setTitle() {
  document.title = `${postId.replaceAll("-", " ").replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})} | ${blogId.replaceAll("-", " ").replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})} | Blog`;
}
</script>

<template>
  <BlogLayout>
    <div class="markdown" v-html="htmlRef.value.value"></div>
  </BlogLayout>
</template>