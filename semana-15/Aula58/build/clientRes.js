"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class clientRes extends residence_1.Residence {
    constructor(name, cpf, cep, totalConsumedEnergy, clientNum) {
        super(name, cpf, cep);
        this.name = name;
        this.cpf = cpf;
        this.totalConsumedEnergy = totalConsumedEnergy;
        this.clientNum = clientNum;
        this.clientName = this.name;
        this.clientNumber = this.clientNum;
        this.consumedEnergy = this.totalConsumedEnergy;
    }
    calculateBill() {
        const bill = this.consumedEnergy * 0.75;
        return bill;
    }
    ;
}
exports.clientRes = clientRes;
const Joao = new clientRes("João", "123456", "11798609770", 500, 123);
console.log(Joao.calculateBill());
//# sourceMappingURL=clientRes.js.map