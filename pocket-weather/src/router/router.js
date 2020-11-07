import { createWebHashHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/AppContent.vue'),
    },
    {
      path: '/logo',
      component: () => import('@/components/WeatherLogoStatic.vue'),
    },
    {
      path: '/logoAnimate',
      component: () => import('@/components/WeatherLogoAnimate.vue'),
    },
  ]
});

export default router;