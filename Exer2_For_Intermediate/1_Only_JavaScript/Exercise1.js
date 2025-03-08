// Problem: Write a function that removes duplicate elements from an array without using Set.


// Solution: 
let givenArray = [5, 4, 7, 8, 5, 4, 3, 5, 7, 4, 3, 5];

const removeDuplicate = myArray => {
    let myUpdatedArray = [];

    for(let i in myArray){
        if(myUpdatedArray.indexOf(myArray[i]) == -1){
            myUpdatedArray.push(myArray[i])
        }
    }
    
    givenArray = myUpdatedArray
};

removeDuplicate(givenArray)
console.log('My Solution:')
console.log(givenArray)


// // ChatGpt Solution:
// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let item of arr) {
//       if (!uniqueArr.includes(item)) {
//         uniqueArr.push(item);
//       }
//     }
//     return uniqueArr;
//   }
//   console.log('ChatGpt Solution:')
//   // Example usage:
//   console.log(removeDuplicates(givenArray)); // [1,2,3,4,5]
  
