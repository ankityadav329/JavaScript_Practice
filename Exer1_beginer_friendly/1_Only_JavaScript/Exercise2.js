// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

/**
 * Also Get Current Date in Various Formats
 * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

// ====================== Solution ================================

// fecthing current date and Time

const now = new Date(); // returns object


// JS returns Days from 0 to 6
let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// This will return day from our list
console.log(`Today is: ${daysList[now.getDay()]}`);

// Getting Time
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let amPm = hours>= 12 ? 'PM': 'AM';

// Printing Time
console.log(`Current Time is: ${hours} ${amPm}: ${minutes} :${seconds}`);


// Getting the Date

let day = now.getDate();
let month = now.getMonth() + 1; // months are 0 based
let year = now.getFullYear();

// Printing the Date in Various Formats

console.log(`Current Date dd-mm-yyyy: ${day}-${month}-${year}`);
console.log(`Current Date mm-dd-yyyy: ${month}-${day}-${year}`);
