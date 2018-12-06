import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: 'user',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Catalog'),
    },
    {
      path: '/group',
      redirect: '/catalog',
    },
    {
      path: '/group/:id',
      name: 'group',
      component: () => import('./views/Group'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/Product'),
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('./views/Delivery'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/Contacts'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search'),
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('./views/Basket'),
    },
    {
      path: '/contact-order',
      name: 'contactOrder',
      component: () => import('./views/ContactOrder'),
    },
    {
      path: '/*',
      component: () => import('./views/404'),
    },
  ],
})
