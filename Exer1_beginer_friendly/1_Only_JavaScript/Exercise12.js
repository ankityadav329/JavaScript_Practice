// Problem: Write a function that checks if a given string is a palindrome.

// Solution:

// Palindrome Examples : level, civic, madam, radar, refer

let givenString = 'civic';

const isPalindrome = myString => {
    let reversedString = '';

    // It reverses the String
    for(let i = myString.length -1; i>=0; i--){
        reversedString += myString[i]
    }

    return myString === reversedString ? 'Yes Its a Palindrome' : 'No, Its not a Palindrome'
};

console.log(isPalindrome(givenString))