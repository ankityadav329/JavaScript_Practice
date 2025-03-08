// Problem: Write a function that reverses the order of words in a sentence. [Hint Down Here]
 
// HINT:
// [make sure words are readable, here we are talking about words not characters]


// Solution:

let givenSentence = 'Hii my name is Maxim';

const reverseSentence = mySentence => {
    return mySentence.split(" ").reverse().join(" ")
};

console.log(reverseSentence(givenSentence))
