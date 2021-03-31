import Vue from "vue"
import VueRouter from "vue-router"

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
  // example of route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import('./views/About.vue')
  { path: '/about', name: 'About', component: About, meta: { title: 'About' } },
  { path: '/:path(.*)', name: 'NotFound', component: NotFound }
]


const router = new VueRouter({
  base: "/",
  mode: "hash",
  routes,
})

export default router

