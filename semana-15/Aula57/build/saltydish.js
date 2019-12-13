"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook) {
        super(price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
exports.feijoada = new SaltyDish(100, 20, ["leite condensado"], 100);
exports.guacamole = new SaltyDish(50, 10, ["abacate"], 100);
//# sourceMappingURL=saltydish.js.map