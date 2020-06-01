import Vue from 'vue'
import VueRouter from 'vue-router'
import Universe from '../views/Universe.vue'
// import Products from '../views/Products.vue'
import Info from '../views/ProductInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Universe',
    redirect:'home',
    component: Universe,
    children:[
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'products/:id?',
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
        path: 'serve',
        name: 'Serve',
        component: () => import('../views/Serve.vue')
      },
      {
        path: 'travel',
        name: 'Travel',
        component: () => import('../views/Travel.vue')
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'checkout',
        name: 'CheckOut',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "check" */ '../views/CheckOut.vue'),
        children:[
          {
            path:'confrim',
            name:'Confirm',
            component: () => import(/* webpackChunkName: "check" */ '../components/CheckOut/Confirm.vue'),
          },
          {
            path: 'fill',
            name: 'Fill',
            component:() => import(/* webpackChunkName: "check" */ '../components/CheckOut/Fill.vue'),
          },
          {
            path: 'complete',
            name: 'Complete',
            component:() => import(/* webpackChunkName: "check" */ '../components/CheckOut/Complete.vue'),
          },
        ]

      },
      {
        path: 'signin',
        name: 'User',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
      },
      
    ]
  },
  
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children:[
      {
        path:'addnew',
        name:'AddNew',
        component:()=>import(/* webpackChunkName: "admin" */'../components/Admin/AddNew.vue')
      },
      {
        path:'productmgt',
        name:'ProductMgt',
        component:()=>import(/* webpackChunkName: "admin" */'../components/Admin/ProductMgt.vue')
      },
      {
        path:'orders',
        name:'Orders',
        component:()=>import(/* webpackChunkName: "admin" */'../components/Admin/Orders.vue')
      },
    ]

  },
  {
    path:'*',
    redirect:'/home'
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
