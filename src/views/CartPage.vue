<script setup>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const total = computed(() => {
  return cart.items.reduce((sum, item) => {
    const preco = parseFloat(item.price.toString().replace(',', '.'))
    return sum + preco * item.quantity
  }, 0)
})
</script>

<template>
  <div class="cart-page">
    <h1>Carrinho de Compras</h1>

    <div class="button-group">
      <router-link to="/" class="back-button">← Voltar para a Página Inicial</router-link>
      <button @click="cart.clearCart()" class="clear-button">🗑 Limpar Carrinho</button>
    </div>

    <div v-if="cart.items.length === 0">
      <p>Seu carrinho está vazio.</p>
    </div>

    <div v-else>
      <ul class="cart-list">
        <li v-for="item in cart.items" :key="item.id" class="cart-item">
          <div class="image-stack">
            <img
              :src="item.image"
              :alt="item.title"
              class="book-image"
            />
          </div>
          <div class="book-info">
            <h3>{{ item.title }}</h3>
            <p>R${{ item.price }} ({{ item.quantity }} unidade{{ item.quantity > 1 ? 's' : '' }})</p>
          </div>
        </li>
      </ul>

      <p class="total"><strong>Total:</strong> R${{ total.toFixed(2) }}</p>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  padding: 20px;
  background-color: #f9f0f3;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.back-button,
.clear-button {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.back-button {
  background-color: #620096;
  color: white;
}

.back-button:hover {
  background-color: #58008c;
}

.clear-button {
  background-color: #b40000;
  color: white;
  border: none;
}

.clear-button:hover {
  background-color: #990000;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
}

.image-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-right: 16px;
}

.book-image {
  width: 50px;
  height: 75px;
  object-fit: cover;
  border-radius: 4px;
}

.book-info h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.book-info p {
  margin: 0;
  font-size: 14px;
}

.total {
  font-size: 18px;
  margin-top: 30px;
  font-weight: bold;
}
</style>
