import { Cashier } from './cashier';

export class Manager extends Cashier {
  //TODO: descobrir onde é o certo pra iniciar a comanda: string[]
  constructor(
    nome: string,
    salario: number,
    job: string,
  ) {
    super(nome, salario, job);
  }


}

export const Chefe = new Cashier("Jonas", 1500, "Gerente");
console.log(Chefe);