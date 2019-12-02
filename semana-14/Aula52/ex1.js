const operacao = process.argv[2];
const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);


if (operacao === "add"){
	console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 + valor2));
	} else if (operacao === "sub"){
	console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 - valor2));
	} else if (operacao === "div"){
	console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 / valor2));
	} else if (operacao === "mult") {
	console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 * valor2));
	} else {
	console.log("\x1b[31m%s\x1b[0m", "Operação inválida. Escolha entre ADD, SUB, DIV ou MULT.");
}




