import { Client } from './client';

export abstract class ClientManager {

    public clients: Client[] = []

    public addClient(...client: Client[]): void {
        for (let item of client){
            this.clients.push(item)
            console.log("Cadastro efetuado!")
        }
    }

    public getClientsQuantity(): number{
        const quantity: number = this.clients.length;
        return quantity
    }

    public printClientBills(): void {
        for (let client of this.clients){
            console.log(
                client.clientNumber + 
                " - " + 
                client.clientName +
                " - " +
                client.calculateBill())
        }
    }

  }
  