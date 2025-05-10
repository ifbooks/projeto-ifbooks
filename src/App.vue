<script setup>

</script>

<template>
  <header>
    <div class="logos">
  <div class="logo">IFbooks</div>
    <div class="divisor"></div>
    <div class="texto">Apreço a <br> leitura</div>
  </div>
    <div class="search">
        <input type="text" placeholder="Pesquisar">
        <button><img src="/src/images/lupa.png" alt="lupa"></button>
    </div>
    <nav>
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
        </ul>
    </nav>
<div class="iconbase">
    <div class="icon">
        <img src="/src/images/carrinho.png" alt="">
    </div>
    <div class="divisor2"></div>
    <div class="icon">
        <img src="/src/images/coraçao.png" alt="">
    </div>
    <div class="divisor2"></div>
    <div class="icon">
        <img src="/src/images/User.png" alt="">
    </div>
</div>

  </header>

  <main>
    <div class="linha"></div>
    <div class="inicio">
    <p>Livro de Destaque</p>
    <h2>Cem anos de solidão</h2>
    <p>Neste clássico de Gabriel García Marques, conheça as fabulosas aventuras dos Buendía-Iguarán, com seus milagres, fantasias e dramas que representam famílias do mundo inteiro. Romance fundamental na história da literatura,  Cem anos de solidão apresenta uma das mais fascinantes aventuras literárias do século XX.</p>
    <button>Acessar página do livro</button>
    <img src="../src/images/cemanosdesolidao.jpg" alt="Livro cem anos de solidão">
    </div>
    <div class="info">
     <p><img src="/src/images/Truck.png" alt="caminhão">Frete grátis para SC</p>
     <p><img src="/src/images/estrela.png" alt="estrela">Livros recomendados</p>
     <p><img src="/src/images/livroaberto.png" alt="livro aberto">Mais vendidos</p>
    </div>
    <div class="lançamento">


    </div>

  </main>
  <footer>
    <p>IFBooks</p>
    <img src="/src/images/facebook.png" alt="facebook">
    <img src="/src/images/instagram.png" alt="instagram">
    <img src="/src/images/twitter.png" alt="twitter">
    <p>Contato</p>
    <ul>
      <li>+55 47 40045263</li>
      <li>8h às 23h - Seg a Sex</li>
      <li>contato@ifbooks.com</li>
      <img src="/src/images/paypal.png" alt="paypal">
      <img src="../src/images/mastercard.png" alt="mastercard">
      <img src="/src/images/visa.png" alt="visa">
    </ul>
    <p>&copy; Alguns direitos reservados. IFBooks 2025</p>
  </footer>
</template>

<style scoped>

header {
  display: flex;
  margin: 8px 80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    margin: 0 20px;
}
ul li a {
  text-decoration: none;
  color: #7B7881;
}
.search {
    display: flex;
    align-items: center;
    border: 2px solid #F1F1F1;
    border-radius: 3px;
    padding: 5px 10px;
    width: 250px;
    background-color: #F1F1F1;
}

.search input {
    background-color: #F1F1F1;
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
    padding: 5px;
}

.search button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: gray;
}
.logos {
  display: flex;
  margin: 0 0 0 0;
}
.logo {
    font-size: 25px;
    color: #231F2D;
    font-weight: 400;
}

.divisor {
    width: 2px;
    height: 30px;
    background-color: #27AE60;
    margin: 0 15px;
}

.texto {
    font-size: 14.02px;
    color: #27AE6099;
}
.icon {
  display: flex;
  margin: 0 5px
}
.iconbase {
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon {
    position: relative;
    font-size: 24px;
    cursor: pointer;
}

.divisor2 {
    width: 2px;
    height: 24px;
    background-color: #27AE60;
}
.linha {
    height: 2px;
    background-color: #27AE60;
    width: 100%;
}


</style>
