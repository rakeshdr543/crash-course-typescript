class Vehicle {
  private ownerName: string = "";
  readonly manufactureDate = "12/20/21";
  constructor(
    public model: string,
    public color: string,
    public price: number
  ) {}

  setOwner(name: string) {
    this.ownerName = name;
  }

  getOwner() {
    return this.ownerName;
  }
}

const car = new Vehicle("audi", "orange", 120000);
console.log(car);
