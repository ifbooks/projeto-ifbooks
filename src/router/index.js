import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '@/views/CartPage.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/carrinho', name: 'Carrinho', component: CartPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
