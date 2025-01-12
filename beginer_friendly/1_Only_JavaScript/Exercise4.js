/**
 * Write a JavaScript program to determine whether a given year is a leap year.
 */

/**
 * ::::::::::::::::: HINT ::::::::::::::::::::::::::::
 * 2024: Divisible by 4, not divisible by 100 → Leap year. ✅
 * 1900: Divisible by 4, divisible by 100 but not 400 → Not a leap year. ❌
 * 2000: Divisible by 4, divisible by 100 and divisible by 400 → Leap year. ✅
 */

// ========================== Solution ============================

function isLeapYear(year){
    if(year%4 == 0 && year%100 !=0){
        console.log(`Year ${year} is a LeapYear`)
    }
    else if(year%4==0 && year%100 ==0 && year%400==0){
        console.log(`Year ${year} is a LeapYear`)
    }
    else{
        console.log(`Year ${year} is not a LeapYear`)
    }
}

isLeapYear(2016); // Yes
isLeapYear(2000); // Yes
isLeapYear(1700); // No
isLeapYear(1800); // No
isLeapYear(100); // No


