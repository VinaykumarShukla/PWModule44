// Create a prototype object called Student
function Student(name) {
    this.name = name;
  }
  
  // Add a method called printDetails to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, the student is ${this.name}`);
  };
  
  // Instantiate a Student object with the name "Mithun"
  let mithun = new Student('Mithun');
  
  // Call the printDetails method
  mithun.printDetails(); // Output: Hello, my name is Mithun