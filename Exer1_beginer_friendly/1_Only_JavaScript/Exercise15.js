// Problem: Write a function that calculates the factorial of a given number using a loop.

// Solution:

let givenNmber = -5;

const factorial = (num) => {
  let storeNum = 1;

  if (num === 1 || num === 0) {
    return 1;
  } 
  else if (num < 0) {
    return " number must be >= 0";
  } 
  else {
    for (let i = 2; i <= num; i++) {
      storeNum *= i;
    }
    return storeNum;
  }
};

console.log(factorial(givenNmber));
