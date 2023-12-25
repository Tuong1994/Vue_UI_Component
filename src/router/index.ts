import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const BASE_URL = '/'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router
