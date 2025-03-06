// Problem: Write a function that finds the maximum number in an array.

// Solution:

let givenArray = [99 , 22, 9, 11];

const findBiggestNumber = myArray => {
    let big = null;

    for(let i of myArray){
        if(big === null){
            big = i;
        }
        else if(big < i){
            big = i;
        }
    }

    return (big === null ? 'Empty Array': big)
};

console.log(findBiggestNumber(givenArray))
