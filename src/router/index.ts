import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout/index.vue'

Vue.use(VueRouter)

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'DashBoard',
        component: () =>
          import(
            /* webpackChunkName: 'group-dashboard' */ '@/views/dashboard/index.vue'
          ),
        meta: { title: '首页', icon: '' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
