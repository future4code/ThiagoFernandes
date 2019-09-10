// Coding together

// Exercício 1.A

function exUma() {
  let num1 = prompt("Insira o número 1")
  let num2 = prompt("Insira o número 2")


  if (num1 === num2) {
    console.log("Erro! Números não podem ser iguais!")
  }
  else if (num1 > num2) {
    console.log(num1, num2)
  }
  else {
    console.log(num2, num1)
  }
}

// exUma()

// Exercício 1.B

function exUmb() {
  let num1 = prompt("Insira o número 1")
  let num2 = prompt("Insira o número 2")
  let num3 = prompt("Insira o número 3")


  if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Erro! Números não podem ser iguais!")
  }
  else if (num1 > num2 && num2 > num3) {
    console.log(num1, num2, num3)
  }
  else if (num1 > num2 && num3 > num2) {
    console.log(num1, num3, num2)
  }
  else if (num2 > num1 && num1 > num3) {
    console.log(num2, num1, num3)
  }
  else if (num2 > num1 && num3 > num1) {
    console.log(num2, num3, num1)
  }
  else if (num3 > num1 && num1 > num2) {
    console.log(num3, num1, num2)
  }
  else {
    console.log(num3, num2, num1)
  }
}

// exUmb()

// Exercício 2.A

function exDoisa() {

  const pergunta = confirm("É um animal?")
  if (pergunta === false) {
    console.log("É uma pedra")
  }
  else if (pergunta === true) {
    const pergunta = confirm("Tem pelo?")
    if (pergunta === false) {
      const pergunta = confirm("Ele voa?")
      if (pergunta === false) {
        console.log("É um peixe")
      } else {
        console.log("É um pássaro")
      }
    }
    else {
      const pergunta = confirm("Ele late?")
      if (pergunta === false) {
        console.log("É um gato")
      } else {
        console.log("É um cachorro")
      }
    }
  }

}

// exDoisa()

// Exercício 2.B

function exDoisb() {

  const pergunta = confirm("É um animal?")
  if (pergunta === false) {
    const pergunta = confirm("Está vivo?")
    if (pergunta === true) {
      console.log("É uma planta")
    } else {
      console.log("É uma pedra")
    }
  }
  else if (pergunta === true) {
    const pergunta = confirm("Tem pelo?")
    if (pergunta === false) {
      const pergunta = confirm("Ele voa?")
      if (pergunta === false) {
        const pergunta = confirm("Tem escamas?")
        if (pergunta === true) {
          console.log("É um peixe")
        } else {
          console.log("É um sapo")
        }
      } else {
        console.log("É um pássaro")
      }
    }
    else {
      const pergunta = confirm("Ele late?")
      if (pergunta === false) {
        const pergunta = confirm("Faz miau?")
        if (pergunta === true) {
          console.log("É um gato")
        } else {
          console.log("É um rato")
        }
      } else {
        console.log("É um cachorro")
      }

    }
  }
}

// exDoisb()

// Exercício 3

function exTres() {

  let nome = prompt("Informe seu nome");
  let tipo = prompt("Nacional (NA) ou Internacional (IN)?")
  let jogo = prompt("Semifinal (SF), Terceiro lugar (DT) ou Final (FI)?")
  let categoria = prompt("Categoria 1, 2, 3 ou 4?")
  let quantidade = prompt("Quantos ingressos você deseja?")
  let preco = 0
 
  if (tipo === "NA") {
    if (jogo === "SF") {
      if (categoria === "1") {
        preco = 1320
      } else if (categoria === "2") {
        preco = 880
      } else if (categoria === "3") {
        preco = 550
      } else {
        preco = 220
      }
    } else if (jogo === "DT") {
      if (categoria === "1") {
        preco = 660
      } else if (categoria === "2") {
        preco = 440
      } else if (categoria === "3") {
        preco = 330
      } else {
        preco = 170
      }
    }
    else {
      if (categoria === "1") {
        preco = 1980
      } else if (categoria === "2") {
        preco = 1320
      } else if (categoria === "3") {
        preco = 880
      } else {
        preco = 330
      }
    }

  let valor = preco * quantidade
  console.log("----DADOS DA COMPRA----")
  console.log("Nome do Cliente", nome)
  console.log("Tipo de Jogo", tipo)
  console.log("Etapa:", jogo)
  console.log("Categoria:", categoria)
  console.log("Quantidade de Ingressos:", quantidade)
  console.log("----VALORES----")
  console.log("Valor do ingresso: R$", preco)
  console.log("Valor total da compra: R$", valor)


  } else {
    if (jogo === "SF") {
      if (categoria === "1") {
        preco = 1320
      } else if (categoria === "2") {
        preco = 880
      } else if (categoria === "3") {
        preco = 550
      } else {
        preco = 220
      }
    } else if (jogo === "DT") {
      if (categoria === "1") {
        preco = 660
      } else if (categoria === "2") {
        preco = 440
      } else if (categoria === "3") {
        preco = 330
      } else {
        preco = 170
      }
    } else {
      if (categoria === "1") {
        preco = 1980
      } else if (categoria === "2") {
        preco = 1320
      } else if (categoria === "3") {
        preco = 880
      } else {
        preco = 330
      }
    }

  let precousd = preco * 4.1
  let valorusd = precousd * quantidade
  let valor = preco * quantidade

  console.log("----DADOS DA COMPRA----")
  console.log("Nome do Cliente", nome)
  console.log("Tipo de Jogo", tipo)
  console.log("Etapa:", jogo)
  console.log("Categoria:", categoria)
  console.log("Quantidade de Ingressos:", quantidade)
  console.log("----VALORES----")
  console.log("Valor do ingresso em USD:", preco)
  console.log("Valor do ingresso em R$:", precousd)
  console.log("Valor total da compra em USD:", valor)
  console.log("Valor total da compra em R$:", valorusd)
  }

} 

// exTres()