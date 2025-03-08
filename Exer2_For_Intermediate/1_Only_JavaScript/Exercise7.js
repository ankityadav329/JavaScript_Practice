// Problem: Write a function that returns a new array with each element squared.

let givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rootArrayItem = myArray => {
    let squaredArray = [];
    for(let item of myArray){
        squaredArray.push(item * item)
    }

    return squaredArray
};

console.log(rootArrayItem(givenArray))
// console.log(Math.sqrt(10).toFixed(3))
