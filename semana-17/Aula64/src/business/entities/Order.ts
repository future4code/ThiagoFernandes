export class Order {
  constructor(
    private id: string,
    private size: number,
    private paper: string,
    private framing: string,
    private border: string,
    private color: string,
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

  public getFraming() {
    return this.framing
  }

  public getBorder() {
    return this.border
  }

  public getColor() {
    return this.color
  }


}


