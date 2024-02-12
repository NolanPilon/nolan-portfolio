<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import projects from '../assets/data/projects.json';
</script>

<template>
    <section>
        <div class="animate__animated animate__fadeIn mx-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard v-for="(project, index) in projects" :key="index" 
                :name="project.name"
                :image="project.image"
                :description="project.description"
                :source="project.source"
                :play="project.link"
                :video="project.video"
            />
        </div>
    </section>
</template>