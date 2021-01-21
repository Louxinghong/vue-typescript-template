import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'DashBoard',
        component: () =>
          import(
            /* webpackChunkName: 'group-dashboard' */ '@/views/dashboard/dashboard.vue'
          ),
        meta: { title: '首页', icon: '' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
