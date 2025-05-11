<script >
import BookCard from '../components/BookCard.vue'
export default {
  components: { BookCard },
  data() {
    return {
     books: [
  {
    id: 1,
    title: "Comigo na Livraria",
    author: "Martha Medeiros",
    price: "32,24",
    image: '/src/assets/images/comigonalivraria.jpg',
    synopsis: "Martha Medeiros celebra sua paixão pelos livros e a leitura como um caminho para o crescimento pessoal."
  },
  {
    id: 2,
    title: "Quincas Borba",
    author: "Machado de Assis",
    price: "32,24",
    image: "/src/assets/images/quincasborba.jpg",
    synopsis: "Quincas Borba narra a ascensão e queda de Rubião, um ingênuo professor que herda uma fortuna e acaba sendo explorado, enlouquecendo e morrendo em Barbacena."
  },
  {
    id: 3,
    title: "A livraria",
    author: "Penelope Fitzgerald",
    price: "13,94",
    image: "/src/assets/images/penelope.jpg",
    synopsis: "A Livraria narra a luta de Florence Green para abrir uma livraria em uma cidade conservadora, enfrentando forte oposição e desafios que ameaçam seu sonho."
  },
  {
    id: 4,
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    price: "16,84",
    image: "/src/assets/images/ahoradaestrela.jpg",
    synopsis: "Clarice Lispector narra a vida de Macabéa, uma jovem nordestina ingênua e solitária que busca um sentido para sua existência no Rio de Janeiro."
  },
  {
    id: 5,
    title: "O Alienista",
    author: "Colson Whitehead",
    price: "26,92",
    image: "/src/assets/images/alienista.jpg",
    synopsis: "Conta a história do médico Simão Bacamarte, que funda um hospício e começa a internar quase toda a cidade, questionando os limites da sanidade."
  },
  {
    id: 6,
    title: "Mar Morto",
    author: "Jorge Amado",
    price: "13,95",
    image: "/src/assets/images/marmorto.jpg",
    synopsis: "Jorge Amado retrata a vida dos pescadores da Bahia, focando na relação entre Guma e Lívia, marcada pelo destino trágico ligado ao mar."
  },
  {
    id: 7,
    title: "Grande sertão: varedas",
    author: "João Guimarães Rosa",
    price: "26,04",
    image: "/src/assets/images/grandesertao.jpg",
    synopsis: "Guimarães Rosa apresenta a jornada de Riobaldo, um ex-jagunço que reflete sobre sua vida, seu amor por Diadorim e os dilemas do sertão."
  },
  {
    id: 8,
    title: "Flor de Poemas",
    author: "Cecília Meireles",
    price: "15,81",
    image: "/src/assets/images/flordepoemas.jpg",
    synopsis: "Cecília Meireles reúne uma coletânea de poesias que exploram temas como amor, saudade, infância e a beleza da vida."
  }
]
    }
  }
}

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
        <button><img src="/src/assets/images/lupa.png" alt="lupa"></button>
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
 <router-link to="/carrinho"><img src="/src/assets/images/carrinho1.png" alt="carrinho"></router-link>
    </div>
    <div class="divisor2"></div>
    <div class="icon">
        <img src="/src/assets/images/heart.png" alt="favoritos">
    </div>
    <div class="divisor2"></div>
    <div class="icon">
        <img src="/src/assets/images/usuario.png" alt="usuario">
    </div>
</div>
  </header>

  <main>
    <div class="linha"></div>
 <div class="inicio">
    <div class="conteudo-livro">
      <span class="livro">Livro Destaque</span>
      <h2>Cem anos de solidão</h2>
      <p>
        Neste clássico de Gabriel García Marques, conheça as fabulosas<br> aventuras dos Buendía-Iguarán, com seus milagres, fantasias e<br> dramas que representam famílias do mundo inteiro. Romance<br> fundamental na história da literatura, Cem anos de solidão<br> apresenta uma das mais fascinantes aventuras literárias do século<br> XX.
      </p>
      <button>Acessar página do livro</button>
    </div>
    <img class="imagem-livro" src="/src/assets/images/cemanosdesolidao.jpg" alt="Livro cem anos de solidão" />
  </div>
    <div class="linha"></div>
    <div class="info">
     <p><img src="/src/assets/images/Truck.png" alt="caminhão">Frete grátis para SC</p>
     <div class="divider"></div>
     <p><img src="/src/assets/images/estrela.png" alt="estrela">Livros recomendados</p>
     <div class="divider"></div>
     <p><img src="/src/assets/images/livroaberto.png" alt="livro aberto">Mais vendidos</p>
    </div>
      <div class="linha"></div>
    <div class="lançamento">

   <div class="container">
    <h1>Lançamentos</h1>
    <div class="book-grid">
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
      />
    </div>
  </div>

    </div>

  </main>
<footer class="footer">
  <div class="footer-container">
    <div class="footer-left">
      <p class="footer-logo">IFbooks</p>
      <div class="footer-social">
        <img src="/src/assets/images/facebook.png" alt="Facebook">
        <img src="/src/assets/images/instagram.png" alt="Instagram">
        <img src="/src/assets/images/twitter.png" alt="Twitter">
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-title">Contato</p>
      <ul class="footer-contato">
        <li><img src="/src/assets/images/Phone.png" alt="telefone"> +55 47 40045263</li>
        <li><img src="/src/assets/images/relogio.png" alt="relogio"> 8h às 23h - Seg a Sex</li>
        <li><img src="/src/assets/images/Mail.png" alt="email"> contato@ifbooks.com</li>
      </ul>
      <div class="footer-payment">
        <img src="/src/assets/images/paypal.png" alt="PayPal">
        <img src="/src/assets/images/mastercard.png" alt="MasterCard">
        <img src="/src/assets/images/visa.png" alt="Visa">
      </div>
    </div>
  </div>
  <p class="footer-copy">© Alguns direitos reservados. IFbooks 2025.</p>
</footer>

</template>

<style scoped>
.container {
  padding: 2rem;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
header {
  display: flex;
  margin: 8px 80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-family: Arial, Helvetica, sans-serif;
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
    background-color: #000000;
    margin: 0 15px;
}

.texto {
    font-size: 14.02px;
    color: #620096;
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
    background-color: #000000;
}
.linha {
    height: 2px;
    background-color: #000000;
    width: 100%;
}
.inicio {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 80px;
  gap: 40px;
}

.conteudo-livro {
  flex: 1;
}

.imagem-livro {
  width: 250px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.livro {
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  color: #620096;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #620096;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 16px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 58px;
  font-weight: bold;
  margin-bottom: 12px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20 px;
  color: #555;
  margin-bottom: 20px;
}

button {
  background-color: #620096;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #56008c;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  padding: 30px 0;
  margin: 0 80px;
}

.info p {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #231F2D;
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.info img {
  width: 20px;
  height: 24px;
  margin-right: 8px;
  margin: 25px 10px;
}

.divider {
  width: 1px;
  height: 50px;
  background-color: #937DC2;
}
.footer {
  background-color: #161817;
  color: rgb(255, 255, 255);
  padding: 40px 80px 20px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #FFFFFF
}

.footer-social img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.footer-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #FFFFFF;
  margin: 0 0 20px 20px;
}

.footer-contato {
  list-style: none;
  padding: 0;
  margin: 0 0 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-contato li {
  display: flex;
  align-items: center;
}

.footer-contato li img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  transform: translateY(2px);
}
.footer-right li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  color: white;
}

.footer-right li img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}


.footer-payment img {
  width: 40px;
  margin-left: 10px;
  margin: 0 13.5px;
}

.footer-copy {
  text-align: center;
  font-size: 16.02px;
  color: #FFFFFF;
  margin-top: 20px;
}
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.container h1 {
  font-size: 38px;
  font-weight: 600;
  margin: 20px 10px 40px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
<style>
html, body {
  background-color: #e9e1e1;
  margin: 0;
  padding: 0;
}
</style>
