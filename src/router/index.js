import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Registration',
      name: 'Registration',
      component: () => import('../views/Registration.vue')
    },

    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },

    // {
    //   path: '/popAuthMenu',
    //   name: 'popAuthMenu',
    //   component: () => import('../views/popAuthMenu.vue')
    // },

    {
      path: '/AboutView',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/HomeView',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },

  ]
})

export default router
