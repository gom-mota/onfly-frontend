// Packages
import { createRouter, createWebHistory } from 'vue-router'

// Views
import HotelView from '@/views/HotelView/HotelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/hotel',
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: HotelView,
    },
    {
      path: '/flight',
      name: 'flight',
      redirect: '/hotel',
    },
    {
      path: '/car',
      name: 'car',
      redirect: '/hotel',
    },
    {
      path: '/bus',
      name: 'bus',
      redirect: '/hotel',
    },
  ],
})

export default router
