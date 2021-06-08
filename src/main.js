import { createApp } from 'vue'
import 'windi.css'
import '@/style/index.scss'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)

app.mount('#app')
