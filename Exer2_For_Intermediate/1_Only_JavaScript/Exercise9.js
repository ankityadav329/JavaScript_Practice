// Problem: Write a function that checks if a given string is a pangram (contains every letter of the alphabet).

let givenString = 'The quick brown fox jumps over a lazy dog';

const isPangram = myString => {
    // js returns char from code in capital
    myString = myString.toUpperCase();
    console.log(givenString)
    for(let i=65; i<=90; i++){
        if(!(myString.includes(String.fromCharCode(i)))){
            return false;
        }
    }
    
    return true;
};

console.log(isPangram(givenString))
