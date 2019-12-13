import { Cashier } from './cashier';

export class Manager extends Cashier {
  constructor(
    nome: string,
    salario: number,
    job: string,
  ) {
    super(nome, salario, job);
  }


}