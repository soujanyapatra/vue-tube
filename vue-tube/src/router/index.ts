import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../pages/home.vue'),
        },
        {
          path: 'shorts',
          component: () => import('../pages/shorts.vue'),
        },
        {
          path: 'subscription',
          component: () => import('../pages/subscription.vue'),
        },
        {
          path: 'history',
          component: () => import('../pages/history.vue'),
        },
        {
          path: 'watch-later',
          component: () => import('../pages/watch-later.vue'),
        },
        {
          path: 'liked',
          component: () => import('../pages/liked.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

export default router
