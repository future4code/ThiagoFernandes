"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor(nome, salario, job, comanda) {
        super(nome, salario, job);
    }
    calculateBill() {
        let conta = 0;
        for (let i = 0; i < pratos.length; i++) {
            conta += pratos.valor[i];
        }
        return conta;
    }
}
exports.Cashier = Cashier;
exports.Jonas = new Cashier("Joao", 500, "Caixa", ["brigadeiro"]);
console.log(exports.Jonas);
//# sourceMappingURL=cashier.js.map