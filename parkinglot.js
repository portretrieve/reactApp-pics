class Car {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    console.log(this);
    // return this.color;
  }
}

let honda = new Car("red");

// console.log(honda.getColor());

// honda.getColor();

let myCar = honda.getColor;

myCar.call(honda);
