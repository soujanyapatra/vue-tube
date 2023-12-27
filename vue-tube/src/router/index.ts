import { createRouter, createWebHistory } from 'vue-router'
import { isEmpty } from 'lodash'

// Method
const checkAuth = () => {
  const isLogin = JSON.parse(localStorage.getItem('user'))
  if (!isEmpty(isLogin))
    return true

  else
    return false
}

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
          name: 'Home',
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
          name: 'Login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          name: 'Register',
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !checkAuth())
    next({ name: 'Login' })
  else if (checkAuth() && (to.name === 'Login' || to.name === 'Register'))
    next({ name: 'Home' })
  else
    next()
})

export default router
