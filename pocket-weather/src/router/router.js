import { createWebHistory, createRouter } from 'vue-router';

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () => import('@/views/AppContent.vue'),
    },
  ]
});

export default router;