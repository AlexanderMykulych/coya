import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import { createPinia } from 'pinia'

import { vfmPlugin } from 'vue-final-modal'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.use(vfmPlugin)

app.use(createVuetify())

app.mount('#app')
