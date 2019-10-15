
const functions = {

assertEquals: (a,b) => {
    if(a === b) {
        return true;
    } else if (a !== b) {
        console.log(a , b);
        return false;
    }
},

makeEmailArr: (names) => {
    let arrayNames = names;
    const firstName = arrayNames[0].toLowerCase();
    const lastName = arrayNames[1].toLowerCase();
    let atEvolveU = "@evolveu.ca"
    return firstName+"."+lastName+atEvolveU;
},

makeEmailObj: (objNames) => {
    let objectNames = objNames;
    const firstObjName = objectNames["fname"].toLowerCase();
    const lastObjName = objectNames["lname"].toLowerCase();
    let atEvolveU = "@evolveu.ca"
    return firstObjName+"."+lastObjName+atEvolveU;
},

// Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:

toDoGroceries: (arrayToDo) => {
    for(let itemList = 0; itemList < arrayToDo.length; itemList++) {
        arrayToDo[itemList]= arrayToDo[itemList] + "!";
    
    }; return arrayToDo;
},

countDown: (numberCountDown) => {
    
    while(numberCountDown > 0) {
        console.log(numberCountDown);
        numberCountDown--;
    }; return numberCountDown;
},

doWhileFunction: (counterTwo) => {
    do {
        console.log(counterTwo);
        counterTwo.push("hi");
  
},

// Basics
// for
// while
// do while

// Next Level
// for in
// for of













}

export default functions;
//[1]. write test
//[2]. to export: write 'export' in front of function
//
 //     export functionName (a,b) {
//          console.log("helloworld");
 //     }

/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/


// Write the function after this comment ---
