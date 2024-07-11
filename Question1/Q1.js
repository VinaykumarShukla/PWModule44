function convertToNumber(str) {
  // Attempt conversion using Number() function
  const number = Number(str);

  // Check if conversion resulted in NaN (Not a Number)
  if (isNaN(number)) {
    return "Invalid number";
  }

  // Return the converted number
  return number;
}

// Example usage
const num1 = convertToNumber("123");
const num2 = convertToNumber("hello");
const num3 = convertToNumber("3.14");

console.log(num1); // Output: 123
console.log(num2); // Output: "Invalid number"
console.log(num3); // Output: 3.14
