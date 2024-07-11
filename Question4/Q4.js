class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  let employee = new Employee('John Doe', 'Software Engineer', 80000);
  
  // Call the getSalary method
  console.log(`The salary of ${employee.name} is ${employee.getSalary()}`); 