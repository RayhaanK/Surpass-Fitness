import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import( '../views/ProductView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/single/:prodID',
    name: 'single',
    props: true,
    component: () => import('../views/SingleView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/treadmill',
    name: 'treadmill',
    component: () => import('../views/TreadmillView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/exercisebikes',
    name: 'exercisebikes',
    component: () => import('../views/ExerciseBikesView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/benches',
    name: 'benches',
    component: () => import('../views/BenchesView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/yogamats',
    name: 'yogamats',
    component: () => import('../views/YogaMatsView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/weights',
    name: 'weights',
    component: () => import('../views/WeightsView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/dumbbells',
    name: 'dumbbells',
    component: () => import('../views/DumbbellsView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
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
  {
    path: '/user',
    name: 'userProfile',
    component: () => import('../views/UserProfileView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },  
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CartView.vue'),
    beforeEnter() {
      if (!cookies.get("LegitUser")) {
        router.push({ name: "login" })
      }
    }
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
