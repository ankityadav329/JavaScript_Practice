// Problem: Write a function that counts the number of vowels in a given string.

// Solution: 

// Note: We will loop through the given string character by character and check it against vowels, if its in vowels will increase count else do nothing :)
 
let vowels = 'aeiou';
let givenString = 'My Name is Maxim';

const countVowels = (vowels, str) => {
    let count = 0;
    for(let i of str){
        if(vowels.includes(i)){
            count ++
        }
    }

    return count
};

console.log(countVowels(vowels, givenString))
