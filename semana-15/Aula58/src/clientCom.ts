import { Residence } from './residence';
import { Client } from './client';

export class clientCom extends Residence implements Client {
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;
  
    calculateBill(): number{
        const bill: number = this.consumedEnergy * 0.53
        return bill;
    };
    
    //É isso msm?
    constructor(
      public name: string,
      public cpf: string,
      cep: string,

    ) {
      super(name, cpf, cep);
    }
  }

  //Com ctz o construtor não deveria ser assim
  const Joao = new clientCom("João", "123456", "11798609770");
  console.log(Joao);
  