// Problem: Write a function that takes an array of strings and returns the longest string.

// Solution:

let givenArray = ['hi', 'my', 'favorite','name', 'is', 'Maxim'];

const longestString = myArray => {
    let mylongestString = ''

    for(let i of myArray){
        if(i.length > mylongestString.length){
            mylongestString = i;
        }
    }

    return mylongestString
};

console.log(longestString(givenArray))
