// Problem: Write a function that takes a string and returns an object representing the frequency of each character.

//  Solution: 

let givenString = 'hey i am ankit yadav';

const charFrequency = myString => {
    const myObj = {};

    // coverting to an array
    for(let char of myString){

        // first time myObj[char] will be undefined, so 0 will take place [(myObj[char] || 0)]
        myObj[char] = (myObj[char] || 0) +1;
    }

    return myObj
};

console.log(charFrequency(givenString))

