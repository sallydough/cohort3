
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

// 'for' function
toDoGroceries: (arrayToDo) => {
    for(let itemList = 0; itemList < arrayToDo.length; itemList++) {
        arrayToDo[itemList]= arrayToDo[itemList] + "!";
    
    }; return arrayToDo;
},

// 'while' function
countDown: (numberCountDown) => {
    
    while(numberCountDown > 0) {
        console.log(numberCountDown);
        numberCountDown--;
    }; return numberCountDown;
},

// 'dowhile' loop
// doWhileFunction: (counterTwo) => {
//     do {
//         console.log(counterTwo);
//         counterTwo.push("hi");
//     } while (counter < 100);
// },

// for of' loop
forOfFunction: () => {
    item=0
    const basket = ['apples', 'oranges', 'grapes'];
   
    for(element of basket) {
        console.log(basket[element]);
     
       return basket;
    }
},

// for in
forInFunction: (detailedbasket) => {
    const detailedBasket = {
        apples: 5,
        oranges: 10,
        grapes: 1000
    };

    for (item in detailedBasket) {
        console.log(item);
        return detailedBasket;
    };
},
















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
