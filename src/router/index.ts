import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Home from '../views/home/Dashboard.vue'
import layout from '../views/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/',
      redirect: "/login",
      name: 'layout',
      component: layout,
      children: [
        {
          path: "/login",
          name: "login",
          component: Login,
        },
         {
          path: "/home",
          name: "home",
          component: Home,
        },
      ]
    },
    
   
  ]
})

export default router
