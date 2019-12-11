import { Residence } from './residence';
import { Client } from './client';

export class clientRes extends Residence implements Client {
    clientName: string = this.name;
    clientNumber: number = this.clientNum;
    consumedEnergy: number = this.totalConsumedEnergy;
  
    calculateBill(): number{
        const bill = this.consumedEnergy * 0.75
        return bill;
    };
    
    constructor(
      public name: string,
      public cpf: string,
      cep: string,
      public totalConsumedEnergy: number,
      public clientNum: number,

    ) {
      super(name, cpf, cep);
    }
  }

  const Joao = new clientRes("João", "123456", "11798609770", 500, 123);
  console.log(Joao.calculateBill());
  