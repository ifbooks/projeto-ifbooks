
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    adicionarAoCarrinho(livro) {
      const index = this.items.findIndex(item => item.id === livro.id);

      if (index !== -1) {
        this.items[index].quantity += 1;
      } else {
        this.items.push({ ...livro, quantity: 1 });
      }
    },
    clearCart() {
      this.items = [];
    }
  }
});
