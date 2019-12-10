import { Employee } from "./employee";

export class Cashier extends Employee {
  //TODO: descobrir onde é o certo pra iniciar a comanda: string[]
  constructor(
    nome: string,
    salario: number,
    job: string,
  ) {
    super(nome, salario, job);
  }

  //TODO: pensar na lógica disso aqui
  // public calculateBill(): number {
  //   let conta: number = 0;
  //   const dish: string[] = this.dish;
  //     for (let i = 0; i < dish.length; i++){
  //       conta += this.dish.price[i]; 
  //     }
  //   return conta;
  // }

}


export const Jonas = new Cashier("Joao", 500, "Caixa");
console.log(Jonas);



