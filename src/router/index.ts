import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<any> = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'group-login' */ '@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () =>
      import(
        /* webpackChunkName: 'group-dashboard' */ '@/views/dashboard/index.vue'
      )
  },
  {
    path: '/Home-test',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
