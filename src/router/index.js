import { createRouter, createWebHistory } from '@ionic/vue-router';
import StartTest from '../views/StartTest.vue'

const routes = [
  {
    path: '/',
    redirect: '/start-test'
  },
  {
    path: '/start-test',
    name: 'StartTest',
    component: StartTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
