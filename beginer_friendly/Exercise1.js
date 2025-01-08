/* 

Write a JavaScript Program to check two numbers and return true if one of the is 100 or if the sum two numberse is 100.

*/

// Solution Down Here ----->

let num1 = Math.floor(Math.random() * 100) + 1; // generate random number from 1 to 100
let num2 = Math.floor(Math.random() * 100) + 1;

// To make it more interersting i am taking number with 2 random numbers 

console.log(num1);
console.log(num2);

if(num1===100){
    console.log(true);
}
else if(num2===100){
    console.log(true);
}
else if(num1+num2 === 100){
    console.log(true);
}
else{
    console.log(false);
}

