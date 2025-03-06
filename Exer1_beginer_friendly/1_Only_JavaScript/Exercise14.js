// Problem: Write a function that prints the multiplication table of a given number.

//  Solution: 

let givenNumber = 9;

const multiplicationTable = num =>{
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} : ${num*i}`)
    }
};

multiplicationTable(givenNumber)
