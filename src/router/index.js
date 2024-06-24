import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'productView',
    component: ProductView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/Contact',
    name: 'contact',
    component: CartView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
