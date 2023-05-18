import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import router from './router/index.js';
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')