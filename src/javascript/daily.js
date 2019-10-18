// const varName = .....
//let variable = ......

const functions = {

//2019-OCT-18 WHATS MY COVERAGE

// Run your coverage report and send the output to Larry as a pdf file. Follow these steps:
    
// run your coverage report: npm test -- --coverage
// look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
// view in the browser. A double click on the file should do it
// right click and select the “Print” option
// print to pdf
// email Larry the pdf (we will be doing this a few more times in the following weeks)
    






//2019-OCT-16/17 : MORE WITH ARRAYS

// Continue from yesterday. Read the article:
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d 

// 'sort' function
sortJungle: (jungle) => {
    // let jungle = ["tiger", "toucan", "leopard","gorilla"];
    jungle.sort();
    return jungle;
},

// 'filter' function



// 'reduce' function



// 'map' function
mapNumSquared: (numNumbers) => {
    // let numNumbers = [1,2,3,4];
    let numSquared = numNumbers.map(function(number) {
        number * number;
    }); return numSquared;
},



// 'forEach'function
forEachFruits: (fruits) => {
    // let fruits = ["apples", "grapes", "oranges"]
    let emptyFruits = [];

    fruits.forEach(function(item){
        emptyFruits.push(item + " are cool!")
    }); return emptyFruits;
},

//splice function
splicedNewZoo: (zoo) => {
    // let zoo = ["apes","camels","peacock","lion","tiger"];
    let slicedZoo = zoo.splice(1,1,"hippos");
    return zoo;
},

//slice function
slicedNewFarm: (farm) => {
    // let farm = ["cattle", "boar", "horse", "chickens"];
    let sliceFarm = farm.slice(3,4);
    return sliceFarm;
},


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
