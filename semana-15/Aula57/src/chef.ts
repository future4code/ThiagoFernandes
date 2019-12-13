import { menu } from './menu';
import { Employee } from './employee';
import { Dish } from "./dish"

export class Chef extends Employee {
  constructor(
    nome: string,
    salario: number,
    job: string = "Chef",
  ) {
    super(nome, salario, job);
  }

  public removeDishFromMenu(prato: string){
        //TODO fazer esse metodo
  }

  public addDishFromMenu(prato: Dish){
    menu.push(prato);
}


}

export const Chefe = new Chef("Jacquim", 3000, "Chef");
console.log(Chefe);