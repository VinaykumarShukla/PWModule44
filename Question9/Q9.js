function numberChecker(arr) {
    return function(num) {
      return arr.includes(num);
    };
  }
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5];
  let checker = numberChecker(numbers);
  
  console.log(checker(3)); // Output: true
  console.log(checker(6)); // Output: false