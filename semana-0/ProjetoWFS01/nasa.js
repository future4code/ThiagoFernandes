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


console.log("Bem vindo ao jogo de Blackjack Automático!")
console.log("Iniciando um novo jogo...")
console.log()

// Controle de vitórias
let vitoriaHumano = 0;
let vitoriaSky = 0;
let empates = 0;

// Inicar jogada automática
function jogar(){

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

  console.log("Suas cartas são "
    + cartas
    + ". A carta revelada do PC é "
    + carta1Pc.texto)
  console.log()
  // Checa se o usuário deve comprar cartas
  // A "lógica" é que a carta deve ser comprada só se o usuário tiver menos de 16 pontos, já que acima disso as chances de passar de 21 são muito grandes
  while (pontos <= 16 && pontos < 21) {
    console.log("Você tem " 
    + pontos 
    + " pontos. Deveríamos comprar uma carta!")
    let novaCarta = comprarCarta()
    cartas.push(novaCarta.texto)
    pontos += novaCarta.valor
    if (pontos >= 21) {
      break
    }
  }

  // Decide se o PC vai comprar cartas
  while (pontos < 21 && pontosPc < 21 && pontosPc < pontos) {
    let novaCartaPc = comprarCarta()
    cartasPc.push(novaCartaPc.texto)
    pontosPc += novaCartaPc.valor
  }

  console.log()

  // Checa e informa o vencedor
  if (pontos === 21 || pontos > pontosPc && pontos < 21 || pontosPc > 21) {
    console.log("Suas cartas foram "
      + cartas
      + ". Sua pontuação foi "
      + pontos
      + ".")
      console.log()
      console.log("As cartas do PC foram: "
      + cartasPc
      + ". A pontuação do PC foi "
      + pontosPc
      + ". \nHUMANOS VENCERAM!")
      console.log()
      vitoriaHumano += 1;
  } else if (pontosPc == 21 || pontosPc > pontos && pontosPc < 21 || pontos > 21) {
    console.log("Suas cartas foram "
      + cartas
      + ". Sua pontuação foi "
      + pontos
      + ".")
      console.log()
      console.log("As cartas do PC foram: "
      + cartasPc
      + ". A pontuação do PC foi "
      + pontosPc
      + ". \nSKYNET VENCEU!")
      console.log()
      vitoriaSky += 1;
  } else {
    console.log("Suas cartas foram "
      + cartas
      + ". Sua pontuação foi "
      + pontos
      + ".")
      console.log()
      console.log("As cartas do PC foram: "
      + cartasPc
      + ". A pontuação do PC foi "
      + pontosPc
      + ". \nO JOGO EMPATOU!")
      console.log()
      empates += 1;
  }

}

// Testar por "x" repetições
for (let i = 0; i < 1000; i++){
  jogar();
}

// Calcular e exibir estatísticas
let porcentHumano = (vitoriaHumano * 100) / 1000
let porcentSky = (vitoriaSky * 100) / 1000
let porcentEmp = (empates * 100) / 1000

console.log()
console.log("Vitórias humanas: " + vitoriaHumano + " (" + porcentHumano + "% )" )
console.log("Vitórias Skynet: " + vitoriaSky + " (" + porcentSky + "%)")
console.log("Empates: " + empates + " (" + porcentEmp + "%)")
