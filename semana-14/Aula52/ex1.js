const operacao = process.argv[2];
const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);

if (operacao === "add"){
	if (isNaN(valor1) || isNaN(valor2)){
		console.log("\x1b[31m%s\x1b[0m", "Erro. Favor inserir DOIS valores (ambos devem ser numéricos).")
	} else {
		console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 + valor2));
	}
} else if (operacao === "sub"){
		if (isNaN(valor1) || isNaN(valor2)){
		console.log("\x1b[31m%s\x1b[0m", "Erro. Favor inserir DOIS valores e ambos devem ser numéricos.");
		} else {
			console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 - valor2));
		}
} else if (operacao === "div"){
	if (isNaN(valor1) || isNaN(valor2)){
		console.log("\x1b[31m%s\x1b[0m", "Erro. Favor inserir DOIS valores (ambos devem ser numéricos).")
	} else {
		console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 / valor2));
	}
} else if (operacao === "mult") {
	if (isNaN(valor1) || isNaN(valor2)){
		console.log("\x1b[31m%s\x1b[0m", "Erro. Favor inserir DOIS valores (ambos devem ser numéricos).")
	} else {
	console.log("\x1b[32m%s\x1b[0m", "\nA resposta é: " + (valor1 * valor2));
	}
} else {
	console.log("\x1b[31m%s\x1b[0m", "Operação inválida. Escolha entre ADD, SUB, DIV ou MULT.");
}