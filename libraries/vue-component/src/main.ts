// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
window.Prism = window.Prism || {};
window.Prism.manual = true;
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'
import { startSocketClient } from './socket'
import { createPinia } from "pinia";


const app = createApp(App)
app.use(createPinia());
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.mount('#app')


startSocketClient();