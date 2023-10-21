import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/encoders-decoders',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: 'base64',
        name: 'base64',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/converters',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: 'camelize-decamelize',
        name: 'camelize-decamelize',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/encryption',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: 'bcrypt',
        name: 'bcrypt',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/generators-parsers',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: 'uuid',
        name: 'uuid',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'cron',
        name: 'cron',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
