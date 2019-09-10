function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]
  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor
  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}


alert("Bem vindo ao jogo de Blackjack!")
let newgame = confirm("Deseja iniciar um novo jogo?")

if (newgame === false) {
  console.log("Que pena... O jogo acabou :(")
} else {

  // Sorteia 2 cartas iniciais do PC
  let carta1Pc = comprarCarta()
  let cartasPc = [carta1Pc.texto]
  let pontosPc = carta1Pc.valor
  let carta2Pc = comprarCarta()
  cartasPc.push(carta2Pc.texto)
  pontosPc += carta2Pc.valor
  // Tira as cartas novamente caso ambas sejam A
  while (pontosPc === 21) {
    carta1Pc = comprarCarta()
    cartasPc = [carta1Pc.texto]
    pontosPc = carta1Pc.valor
    carta2Pc = comprarCarta()
    cartasPc.push(carta2Pc.texto)
    pontosPc += carta2Pc.valor
  }

  // Sorteia 2 cartas iniciais para o usuário
  let carta1 = comprarCarta()
  let cartas = [carta1.texto]
  let pontos = carta1.valor
  let carta2 = comprarCarta()
  cartas.push(carta2.texto)
  pontos += carta2.valor
  // Tira as cartas novamente caso ambas sejam A
  while (pontos === 21) {
    carta1 = comprarCarta()
    cartas = [carta1.texto]
    pontos = carta1.valor
    carta2 = comprarCarta()
    cartas.push(carta2.texto)
    pontos += carta2.valor
  }

  // Checa se o usuário quer comprar cartas
  let comprar = confirm("Suas cartas são "
    + cartas
    + ". A carta revelada do PC é "
    + carta1Pc.texto
    + ". Deseja comprar mais uma carta?")
  // Compra cartas, mas encerra o loop se passar de 21 pontos
  while (pontos < 21 && comprar === true) {
    let novaCarta = comprarCarta()
    cartas.push(novaCarta.texto)
    pontos += novaCarta.valor
    if (pontos >= 21){
      break
    }
    comprar = confirm("Suas cartas são "
      + cartas
      + ". A carta revelada do PC é "
      + carta1Pc.texto
      + ". Deseja comprar mais uma carta?")
  }

// Decide se o PC vai comprar cartas
while (pontos < 21 && pontosPc < 21 && pontosPc < pontos) {
  let novaCartaPc = comprarCarta()
  cartasPc.push(novaCartaPc.texto)
  pontosPc += novaCartaPc.valor
}

// Checa e informa o vencedor
if (pontos === 21 || pontos > pontosPc && pontos < 21 || pontosPc > 21) {
  alert("Suas cartas foram "
    + cartas
    + ". Sua pontuação foi "
    + pontos
    + ". As cartas do PC foram: "
    + cartasPc
    + ". A pontuação do PC foi "
    + pontosPc
    + ". HUMANOS VENCERAM!")
} else if (pontosPc == 21 || pontosPc > pontos && pontosPc < 21 || pontos > 21) {
  alert("Suas cartas foram "
    + cartas
    + ". Sua pontuação foi "
    + pontos
    + ". As cartas do PC foram: "
    + cartasPc
    + ". A pontuação do PC foi "
    + pontosPc
    + ". SKYNET VENCEU!")
} else {
  alert("Suas cartas foram "
    + cartas
    + ". Sua pontuação foi "
    + pontos
    + ". As cartas do PC foram: "
    + cartasPc
    + ". A pontuação do PC foi "
    + pontosPc
    + ". O JOGO EMPATOU!")
}

}
