import { createRouter, createWebHistory } from 'vue-router'
import HotelView from '@/views/HotelView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hotel',
      name: 'hotel',
      component: HotelView,
    },
  ],
})

export default router
