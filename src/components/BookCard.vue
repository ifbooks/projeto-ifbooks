<template>
  <div class="book-card">
    <div class="image-container">
      <img :src="book.image" :alt="book.title" class="book-image" />
      <div class="overlay">
        <div class="synopsis">{{ book.synopsis }}</div>
      </div>
    </div>
    <h2 class="book-title">{{ book.title }}</h2>
    <p class="book-author">{{ book.author }}</p>
    <p class="book-price">R${{ book.price }}</p>
    <button class="buy-button">Comprar</button>
  </div>
</template>


<script>
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
};
</script>
<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
}

.book-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

.book-card {
  width: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.8s ease;
}

.book-card:hover {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 8px;
}

.book-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
}

.image-container:hover .overlay {
  opacity: 1;
}

.synopsis {
  font-size: 14px;
  line-height: 1.4;
  max-height: 100%;
  overflow-y: auto;
}

.book-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 1px;
}

.book-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0 4px;
}

.book-author {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #666;
}

.book-price {
  font-family: Arial, Helvetica, sans-serif;
  color: #29692d;
  font-weight: bold;
  margin: 6px 0;
}

.buy-button {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #620096;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
}

.buy-button:hover {
  background-color: #58008c;
}
</style>
