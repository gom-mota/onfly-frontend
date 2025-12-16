// Packages
import { createRouter, createWebHistory } from 'vue-router'

// Views
import HotelView from '@/views/HotelView/HotelView.vue'
import DefaultLayout from '@/views/DefaultLayout/DefaultLayout.vue'
import NotFoundView from '@/views/NotFoundView/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', redirect: '/hotel' },
        { path: 'hotel', component: HotelView },
        { path: 'flight', redirect: '/hotel' },
        { path: 'car', redirect: '/hotel' },
        { path: 'bus', redirect: '/hotel' },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      children: [{ path: '', component: NotFoundView }],
    },
  ],
})

export default router
