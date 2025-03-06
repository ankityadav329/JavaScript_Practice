// Problem: Write a function that prints all even numbers from 1 to 100 using a loop.

// Solution: 

const printEven = () =>{
    for(let i=1; i<=100; i++){
        if(i % 2 === 0){
            console.log(`The number ${i} is Even`)
        }
    }
};

printEven()
