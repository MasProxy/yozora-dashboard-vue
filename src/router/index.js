import { createRouter, createWebHistory } from 'vue-router'
import FirstLoginPage from '@/views/login/FirstLoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'firstLoginPage',
      component: FirstLoginPage,
    },
  ],
})

export default router
