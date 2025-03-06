// Problem: Write a function that takes an array of numbers and returns the sum of its elements.

// Solution:

let givenArray = [2, 4, 6, 8, 8, 9, 3]; // total must be 40

const totalOfItems = myArray =>{
    let sumTotal = 0;
    for(let i of myArray){
        sumTotal += i;
    }

    return sumTotal
};

console.log(totalOfItems(givenArray));

