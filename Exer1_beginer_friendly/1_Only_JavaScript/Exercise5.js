/**
 * Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 
 */

//===================== Solution ==================================


// Iterating Over the Years
for(let year=2014; year<=2050; year++){
    // getting the January 1st of the Current Year
    let myDate = new Date(year, 0, 1);

    // The Day of the Jan 1st of the Year [ 0 means Sunday]
    let myDay = myDate.getDay();

    // Here using ternery operator [ condition ? if True : if False]
    myDay==0 ? 
    console.log(`Jan 1st of ${year} is Sunday`):
    console.log(`Jan 1st of ${year} is not Sunday`)
    
    // // If You want Sunday Year Only
    // if(myDay==0){
    //     console.log(`Jan 1st of ${year} is Sunday`);
    // }
}

