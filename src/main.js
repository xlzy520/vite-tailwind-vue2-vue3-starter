import { createApp } from 'vue'
import "windi.css";
import App from './App.vue'
import { routes } from '/src/router/index.js'
import { createRouter, createWebHashHistory } from 'vue-router'

let app = createApp(App)
let router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)

app.mount('#app')
