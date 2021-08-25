import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/room',
    name: 'room',
    component: () => import('./../views/Room.vue'),
    children: [
      {
        path: 'detail',
        name: 'room-detail',
        component: () => import('./../components/RoomDetail.vue')
      },
      {
        path: 'review',
        name: 'room-review',
        component: () => import('./../components/Review.vue')
      },
      {
        path: 'comment',
        name: 'room-comment',
        component: () => import('./../components/Comment.vue')
      }
    ]
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: () => import('./../views/Confirm.vue')
  },
  {
    path: '/confirm/complete',
    name: 'complete',
    component: () => import('./../components/CompleteOrder.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
