function getPerson(person) {
    try {
      if (typeof person !== 'object' || person === null) {
        throw new Error("Invalid parameter type");
      }
      if (!person.hasOwnProperty('name') || !person.hasOwnProperty('age')) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (e) {
      return e.message;
    }
  }

console.log(getPerson({ name: 'John', age: 30 }));
console.log(getPerson({ name: 'Jane', age: 'thirty' })); 
console.log(getPerson({})); 
console.log(getPerson(null)); 
console.log(getPerson('John')); 
console.log(getPerson(30)); 
console.log(getPerson(undefined));