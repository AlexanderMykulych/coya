// register vue composition api globally
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import { createPinia } from 'pinia';
import Prism from 'prismjs';
import App from './App.vue';
import './styles/main.css';
// windicss layers
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import { startSocketClient } from './socket';
window.Prism = window.Prism || {};
Prism.manual = true;

const app = createApp(App);
app.use(createPinia());
const router = createRouter({
    history: createWebHistory(),
    routes,
});
app.use(router);
app.mount('#app');

startSocketClient();
