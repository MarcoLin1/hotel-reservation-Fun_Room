import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room',
    name: 'Room',
    component: () => import('./../views/Room.vue')
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('./../views/Confirm.vue')
  },
  {
    path: '/confirm/complete',
    name: 'Complete',
    component: () => import('./../components/CompleteOrder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
