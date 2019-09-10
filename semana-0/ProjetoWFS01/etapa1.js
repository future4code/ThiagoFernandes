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

//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".
console.log("Bem vindo ao jogo de Blackjack!")
console.log()

//2 - Envia um confirm que pergunta ao usuário se ele "quer iniciar uma nova rodada".
let newgame = confirm("Deseja iniciar um novo jogo?")

// 3 - Se o usuário responder `Cancelar`, imprime uma mensagem no console "O jogo acabou".
//4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada. A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
//5 - O programa deve logar as cartas e pontuação de cada jogador no formato `Usuário - cartas: Q♣️ 10♣️  - pontuação 20` ou `Computador - cartas: Q♣️ 10♣️  - pontuação 20`
//6 - O programa deve imprimir o vencedor `Usuário ganhou!` . Em caso de empate imprimir `Empate!`.
if (newgame === false){
  console.log("Que pena... O jogo acabou :(")
} else {
  console.log("--- JOGADOR 1: USUÁRIO ---")
  const carta1 = comprarCarta()
  let pontos = carta1.valor
  const carta2 = comprarCarta()
  pontos += carta2.valor
  console.log("Cartas:", carta1.texto, carta2.texto)
  console.log("Total de Pontos:", pontos)

  console.log("--- JOGADOR 2: SKYNET ---")
  const carta1Pc = comprarCarta()
  let pontosPc = carta1Pc.valor
  const carta2Pc = comprarCarta()
  pontosPc += carta2Pc.valor
  console.log("Cartas:", carta1Pc.texto, carta2Pc.texto)
  console.log("Total de Pontos:", pontosPc)
  console.log()

  if (pontos > pontosPc){
    console.log(">>>> HUMANOS VENCERAM")
  } else if (pontos < pontosPc){
    console.log(">>>> SKYNET VENCEU")
  } else {
    console.log(">>>> EMPATE!")
  }

}