import { Residence } from './residence';
import { Client } from './client';

export class clientCom extends Residence implements Client {
    clientName: string = this.name;
    clientNumber: number = this.clientNum;
    consumedEnergy: number = this.consumed;
  
    calculateBill(): number{
        const bill: number = this.consumedEnergy * 0.53
        return bill;
    };
    
    constructor(
      public name: string,
      public cpf: string,
      cep: string,
      public consumed: number,
      public clientNum: number,

    ) {
      super(name, cpf, cep);
    }
  }

  const Joao = new clientCom("Loja Comercial", "123456", "11798609770", 500, 1);
  console.log(Joao.calculateBill());
  