// const varName = .....
//let variable = ......

const functions = {

// 2019-OCT-15 PREP FOR ARRAY

// 'for in' loop
// forInFunction:
// function (detailedbasket) {
//     const detailedBasket = {
//         apples: 5,
//         oranges: 10,
//         grapes: 1000
//     };

//     for (item in detailedBasket) {
//         console.log(item);
        
//     };return detailedBasket;
// },

// 'for of' loop

animalJudgement: 
function (animals) {
    // let animals = ["pigs","bunnies","lamb","cow","ducks"];
    let cute = " are so damn cute!";
    let sweet=0;
    for (let y of animals) {
       sweet= y+cute;
        
    } return sweet; 
},

// 'dowhile' loop
// counterTwo: 10,

doWhileFunction: (counterTwo) => {
    do {
        console.log(counterTwo);
        counterTwo--;
    } while (counterTwo > 0);
    return counterTwo;
},

// 'while' function
countDown: (numberCountDown) => {
    
    while(numberCountDown > 0) {
        console.log(numberCountDown);
        numberCountDown--;
    }; return numberCountDown;
},

// 'for' function
toDoGroceries: (arrayToDo) => {
    for(let itemList = 0; itemList < arrayToDo.length; itemList++) {
        arrayToDo[itemList]= arrayToDo[itemList] + "!";
    
    }; return arrayToDo;
},

//2019-OCT-11 makeEmailObjrecieves object**
makeEmailObj: (objNames) => {
    let objectNames = objNames;
    const firstObjName = objectNames["fname"].toLowerCase();
    const lastObjName = objectNames["lname"].toLowerCase();
    let atEvolveU = "@evolveu.ca"
    return firstObjName+"."+lastObjName+atEvolveU;
},

//2019-OCT-09 makeEmailArr recieve array**
makeEmailArr: (names) => {
    let arrayNames = names;
    const firstName = arrayNames[0].toLowerCase();
    const lastName = arrayNames[1].toLowerCase();
    let atEvolveU = "@evolveu.ca"
    return firstName+"."+lastName+atEvolveU;
},

//2019-OCT-07 assertEquals 
assertEquals: (a,b) => {
    if(a === b) {
        return true;
    } else if (a !== b) {
        console.log(a , b);
        return false;
    }
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
