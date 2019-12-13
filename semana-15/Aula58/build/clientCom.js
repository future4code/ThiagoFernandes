"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class clientCom extends residence_1.Residence {
    constructor(name, cpf, cep) {
        super(name, cpf, cep);
        this.name = name;
        this.cpf = cpf;
    }
    calculateBill() {
        const bill = this.consumedEnergy * 0.53;
        return bill;
    }
    ;
}
exports.clientCom = clientCom;
const Joao = new clientCom("João", "123456", "11798609770");
console.log(Joao);
//# sourceMappingURL=clientCom.js.map