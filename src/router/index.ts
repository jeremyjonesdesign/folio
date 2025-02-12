import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/lib/supabase'
import Home from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    children: [
      {
        path: 'ideas',
        name: 'IdeasManager',
        component: () => import('@/views/admin/IdeasManager.vue')
      },
      {
        path: 'testimonials',
        name: 'TestimonialManager',
        component: () => import('@/views/admin/TestimonialManager.vue')
      }
    ]
  },
  {
    path: '/admin/testimonials',
    component: () => import('../views/admin/TestimonialManager.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      next('/admin')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
