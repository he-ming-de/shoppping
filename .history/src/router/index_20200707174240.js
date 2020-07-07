import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Public from '../views/public/Public'
import { reduce } from 'core-js/fn/array'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Public',
    component: Public,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
