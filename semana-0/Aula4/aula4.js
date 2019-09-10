// Exercício 1

function exUm(){

  const certo = 11
  let contador = 1
  let numero = Number(prompt("Escolha um número entre 1 e 20!"))

  while (numero !== certo){
    if (numero < certo){
      console.log("O número chutado foi", numero)
      console.log("Errou!")
      alert("Abaixo!")
    } else if (numero > certo) {
      console.log("O número chutado foi", numero)
      console.log("Errou!")
      alert("Acima!")
    }
    contador += 1
    numero = Number(prompt("Escolha um número entre 1 e 20!"))
  }

  console.log("O número chutado foi", numero)
  console.log("Acertou!")
  console.log("Você precisou de", contador, "tentativas")

}

//exUm()

// Exercício 2

function exDois(){

  const certo = Math.floor((Math.random() * 20) + 1);
  let contador = 1
  let numero = Number(prompt("Escolha um número entre 1 e 20!"))

  while (numero !== certo){
    if (numero < certo){
      console.log("O número chutado foi", numero)
      console.log("Errou!")
      alert("Abaixo!")
    } else if (numero > certo) {
      console.log("O número chutado foi", numero)
      console.log("Errou!")
      alert("Acima!")
    }
    contador += 1
    numero = Number(prompt("Escolha um número entre 1 e 20!"))
  }

  console.log("O número chutado foi", numero)
  console.log("Acertou!")
  console.log("Você precisou de", contador, "tentativas")
}

//exDois()

// Exercício 3

function exTres(){
  
  console.log("COMPUTADOR 1 x COMPUTADOR 2: START!")
  console.log()
  let contador = 1
  let min = 1
  let max = 100
  let acertou = false
  const certo = Math.floor((Math.random() * 100) + 1);

while (!acertou){
    let numero = min + Math.floor((Math.random() * (max - min + 1)));
    contador += 1
    if (numero < certo){
      console.log("O número chutado foi", numero)
      console.log("Errou! Tenta mais pra cima!")
      console.log()
      min = numero + 1
    } else if (numero > certo) {
      console.log("O número chutado foi", numero)
      console.log("Errou! Tenta mais pra baixo!")
      console.log()
      max = numero - 1
    } else {
      console.log("O número chutado foi", numero)
      console.log("◥◤◥◤◥◤ ACERTOU ◥◤◥◤◥◤") 
      console.log()
      console.log("Computador 1 precisou de", contador, "tentativas")
      acertou = true
    }
  }
}  

exTres()