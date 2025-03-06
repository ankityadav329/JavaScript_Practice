// Problem: Write a function that takes a string and returns its reverse.

// Solution:

let str = 'Hey My Name is Maxim';

const reverseString = str => { // when we have single parameter, we dont need to write (str)
    let reversedString = ''
    for(let i = str.length-1; i >= 0 ; i--){
        // console.log(str[i])
        reversedString += str[i];
    }
    return reversedString
};

console.log(reverseString(str));
