class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  // Instantiate an instance of the Car class
  let myCar = new Car('Toyota', 'Corolla', 2015);
  
  // Call the getDescription method
  console.log(myCar.getDescription());