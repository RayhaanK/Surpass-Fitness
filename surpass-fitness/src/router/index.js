import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import( '../views/ProductView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/single/:prodID',
    name: 'single',
    props: true,
    component: () => import('../views/SingleView.vue')
  },
  {
    path: '/treadmill',
    name: 'treadmill',
    component: () => import('../views/TreadmillView.vue')
  },
  {
    path: '/exercisebikes',
    name: 'exercisebikes',
    component: () => import('../views/ExerciseBikesView.vue')
  },
  {
    path: '/benches',
    name: 'benches',
    component: () => import('../views/BenchesView.vue')
  },
  {
    path: '/yogamats',
    name: 'yogamats',
    component: () => import('../views/YogaMatsView.vue')
  },
  {
    path: '/weights',
    name: 'weights',
    component: () => import('../views/WeightsView.vue')
  },
  {
    path: '/dumbbells',
    name: 'dumbbells',
    component: () => import('../views/DumbbellsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
