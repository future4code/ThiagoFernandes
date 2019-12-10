import { menu } from './menu';
import { Employee } from './employee';

export class Chef extends Employee {
  constructor(
    nome: string,
    salario: number,
    job: string,
  ) {
    super(nome, salario, job);
  }

  //TODO descobrir pq esse splice não funciona aqui
  private removeDishFromMenu(prato: string){
      menu = menu.splice(menu.indexOf(prato), 1);
      return menu;
  }


}

export const Chefe = new Chef("Jacquim", 3000, "Chef");
console.log(Chefe);