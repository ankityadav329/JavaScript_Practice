// Problem: Write a function that merges two sorted arrays into one sorted array.

// Solution : [ChatGpt Solution is better than mine due to time complexity]

let sortedArray1 = [1, 2, 3, 4, 5, 6, 7];
let sortedArray2 = [5, 6, 7, 8, 9, 10];


const mergeSortedArray = (myArray1, myArray2) => {
    let newArray = myArray1.concat(myArray2)

    for(let i=0; i< newArray.length; i++){
        for(let j = i+1; j < newArray.length; j++){
            if(newArray[i] > newArray[j]){
                temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
        }
    }

    return newArray
};

console.log(mergeSortedArray(sortedArray1, sortedArray2))

// ChatGpt Solution:

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    // Append any remaining elements
    while (i < arr1.length) {
      merged.push(arr1[i++]);
    }
    while (j < arr2.length) {
      merged.push(arr2[j++]);
    }
    return merged;
  }
  // Example usage:
  console.log(mergeSortedArrays(sortedArray1, sortedArray2)); // [1,2,3,4,5,6]
  
