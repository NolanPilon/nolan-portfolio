import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import BlogList from '../views/BlogList.vue';
import BlogPost from '../views/BlogPost.vue';
import Projects from '../views/Projects.vue';
import Resume from '../views/Resume.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {   path: '/', 
        name: 'About', 
        component: About,
        meta: {
            title: "About",
            description: ""
        }
    },
    {   path: '/blog', 
        name: 'Blog', 
        component: Blog,
        meta: {
            title: "Blog",
            description: ""
        }
    },
    {   path: '/blog/:blogid', 
        name: 'BlogList', 
        component: BlogList,
        meta: {
            title: "",
            description: ""
        }
    },
    {   path: '/blog/:blogid/:postid', 
        name: 'BlogPost', 
        component: BlogPost,
        meta: {
            title: "",
            description: ""
        }
    },
    {   path: '/projects', 
        name: 'Projects', 
        component: Projects,
        meta: {
            title: "Projects",
            description: ""
        }
    },
    {   path: '/resume', 
        name: 'Resume', 
        component: Resume,
        meta: {
            title: "Resume",
            description: ""
        }
    },
    {   path: "/:catchAll(.*)", 
        name: "NotFound", 
        component: NotFound,
        meta: {
            title: "Page Not Found",
            description: ""
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
    next();
})

export default router