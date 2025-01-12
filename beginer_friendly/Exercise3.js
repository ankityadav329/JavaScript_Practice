/**
 * Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
 * 
 *  Hint: Area of Triangle Using Heron's Formula [Feel Free to Google it as its the Math Thing.]
 *
 */

//========================== Solution ==============================

// Here is S will be Semi-Parameter => s = (a+b+c)/2;
// And a, b, c are the sides of the triangle.
// Triangle Area formula => root of (s(s-a)(s-b)(s-c))


// Stroing Values
let a = 5;
let b = 6;
let c = 7;

// Calculating Semi-Parameter
let s = (a+b+c)/2;

// Area of the Triangle
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(`Area of the Triangle: ${area}`);
