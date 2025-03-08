// Problem: Write a function that finds the second highest number in an array.

let givenArray = [99, 11, 5, 7, 88, 34, 67, 8];

const secondHighest = myArray => {
    let highest = 0, secondHigh = 0;

    for(let i=0; i < myArray.length; i++){
        if(myArray[i] > highest){
            secondHigh = highest;
            highest = myArray[i];
        }
        else if( myArray[i] > secondHigh && !(myArray[i] == highest)){
            secondHigh = myArray[i];
        }
    }
    
    return secondHigh 
};

console.log(`second Highest: ${secondHighest(givenArray)}`)
