import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Products from '../views/Products.vue'
import Info from '../views/ProductInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:id?',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    children:[
      {
        path: 'info',
        name: 'Info',
        component: Info
      },
    ]
    
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('../views/Serve.vue')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  

  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
