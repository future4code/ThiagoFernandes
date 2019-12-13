import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

export const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
// console.log("A unidade do brigadeiro custa:", brigadeiro.getSlicePrice());
// console.log("O lucro é de:", brigadeiro.getProfit());

export const biscoito = new Dessert(50, 10, ["farinha"], 100, 1);
