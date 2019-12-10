import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  redirect: '/home',
  component: Layout,
  children: [{
    path: 'home',
    component: () =>
                import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  }]
}

]

const router = new VueRouter({
  routes
})

export default router
