// Problem: Write a function that sorts an array of numbers in ascending order without using the built-in sort function.


// Solution: 

let givenArray = [6, 7, 2, 6, 7, 9, 11, 1, 10];

const arraySorting = arr => {

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
};

arraySorting(givenArray)
console.log(givenArray)
