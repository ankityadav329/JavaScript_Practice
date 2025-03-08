// Problem: Write a function that returns all prime numbers less than a given number.

// Solution: 

let givenNumber = 100;

const returnPrime = num => {
    let primeNum = []

    for(let i=2; i < num; i++){
        if(i===2 || i===3){
            primeNum.push(i)
        }
        else if(!(i%2 == 0)){
            let divisible = false;
            for(let j = 3; j < i; j++){
                if(i % j == 0){
                    divisible = true;
                    break
                }
            }
            if(!divisible){
                primeNum.push(i)
            }
        }
    }

    return primeNum
};

console.log(returnPrime(givenNumber));


// ChatGpt Solution: [Again its better than my code]

function primesUpTo(n) {
    let primes = [];
    for (let i = 2; i < n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }
  console.log(primesUpTo(20)); 
  

