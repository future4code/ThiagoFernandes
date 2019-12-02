const operacao = process.argv[2];
const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);

if (operacao === "add"){
	console.log(valor1 + valor2);
} else if (operacao === "sub"){
	console.log(valor1 - valor2);
} else if (operacao === "div"){
	console.log(valor1 / valor2);
} else {
	console.log(valor1 * valor2);
}
