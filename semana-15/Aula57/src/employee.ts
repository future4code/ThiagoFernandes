export abstract class Employee {
    protected nome: string;
    protected salario: number;
    protected job: string;
  
    constructor(
      nome: string,
      salario: number,
      job: string,
    ) {
      this.nome = nome;
      this.salario = salario;
      this.job =  job;
    }
  
    private sayJob(): string {
      return this.job;
    }
  
}
  