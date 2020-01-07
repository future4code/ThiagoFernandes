export class Order {
  constructor(
    private id: string,
    private size: number,
    private paper: string,
  ) {}

  public getId() {
    return this.id
  }

  public getSize() {
    return this.size
  }

  public getPaper() {
    return this.paper
  }


}


