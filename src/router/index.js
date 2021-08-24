import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/room',
    name: 'Room',
    component: () => import('./../views/Room.vue'),
    children: [
      {
        path: 'detail',
        name: 'room-detail',
        component: () => import('./../components/RoomDetail.vue')
      },
      {
        path: 'review',
        name: 'Review',
        component: () => import('./../components/Review.vue')
      }
    ]
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
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
