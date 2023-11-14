import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const BASE_URL = 'http://localhost:5173/'

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router