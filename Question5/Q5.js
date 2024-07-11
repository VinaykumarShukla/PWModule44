class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class with name and age
  let person1 = new Person('John Doe', 30);
  console.log(person1.getDetails()); 
  
  // Instantiate an instance of the Person class without name and age
  let person2 = new Person();
  console.log(person2.getDetails()); 