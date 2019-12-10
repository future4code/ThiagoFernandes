import { Employee } from "./employee";

export class Cashier extends Employee {
  private job: string;
  constructor(
    nome: string,
    salario: number,
    job: string,
  ) {
    super(nome, salario, job);
    this.job = job;
  }

  public calculateBill(): number {
   //TODO escrever essa funcao
    return;
  }

}





