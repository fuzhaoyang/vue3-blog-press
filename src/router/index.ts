import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article',
    component: () => import('../views/CategoryList.vue')
  },
  {
    path: '/article/:id',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/download',
    component: () => import('../views/GreenDownLoad.vue')
  },
  {
    path: '/download/:id',
    component: () => import('../views/DownLoadDetail.vue')
  },
  {
    path: '/message',
    component: () => import('../views/MessageBoard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
