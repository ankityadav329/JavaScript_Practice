// Problem: Write a function that rearranges an array so that all even numbers appear before odd numbers.


let givenArray = [35, 564, 745, 86, 2, 34, 3, 7, 77, 98];

const arrangeEvenOdd = myArray => {
    let evenItems = [], oddItems = [];
    for(item of myArray){
        if(item % 2 == 0){
            evenItems.push(item);
        }
        else{
            oddItems.push(item);
        }
    }

    givenArray = evenItems.concat(oddItems);
}; 

arrangeEvenOdd(givenArray)
console.log(givenArray)
