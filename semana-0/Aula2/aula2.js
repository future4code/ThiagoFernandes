// Exercício 1.A

const produtos = {
  p0: "computador",
  p1: "geladeira",
  p2: "ventilador",
  v0: 300,
  v1: 500,
  v2: 100
}

const soma = produtos.v0 + produtos.v1 + produtos.v2;
console.log("R$: ", soma);
console.log();

// Exercício 1.B

const fahrenheit = 75;

const conv_kelvin = (fahrenheit - 32) * 5 / 9 + 273.15; 
const conv_celsius = (fahrenheit - 32) * 5 / 9;

console.log("Fahrenheit: ", fahrenheit);
console.log("Celsius: ", conv_celsius);
console.log("Kelvin: ", conv_kelvin);
console.log();

// Exercício 2.A

const fahrenheitAtual = prompt("Digite a temperatura em F");

const conver_kelvin = (fahrenheitAtual - 32) * 5 / 9 + 273.15; 
const conver_celsius = (fahrenheitAtual - 32) * 5 / 9;

console.log("Fahrenheit: ", fahrenheitAtual);
console.log("Celsius: ", conver_celsius);
console.log("Kelvin: ", conver_kelvin);
console.log();

// Exercício 2.B

const nome = prompt("Primeiro nome:");
const sobrenome = prompt("Sobrenome:")

const nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
console.log();

// Exercício 2.C

const rua = prompt("Rua:");
const numero = prompt("Número:");
const complemento = prompt("Complemento:");
const bairro = prompt("Bairro:");
const cidade = prompt("Cidade:");

console.log(rua,",",numero,"-",complemento,"-",bairro,",", cidade)
console.log();

// Exercício 3.A

const casaDestrancada = confirm("A casa está destrancada?");
const temChave = confirm("Você tem a chave?");
const consegueEntrar = (!casaDestrancada && temChave) || casaDestrancada;

console.log("O usuário consegue entrar na casa? ", consegueEntrar);

// Exercício 3.B

const estaChovendo = confirm("Está chovendo?");
const temGuarda = confirm("Lembrou do guarda-chuva?");
const vaiMolhar = estaChovendo && !temGuarda;

console.log("O usuário vai se molhar? ", vaiMolhar);
console.log();

// Exercício 4

const salarioMinimo = prompt("Qual o valor do salário mínimo?");
const consumoKw = prompt("Quantos kw foram consumidos?");

const valorKW = salarioMinimo / 5;
console.log("Valor kW:", valorKW);
const valorConta = valorKW * consumoKw;
console.log("Valor da conta:", valorConta);
const valorDesconto = valorConta - (valorConta * 0.15);
console.log("Valor com desconto:", valorDesconto);