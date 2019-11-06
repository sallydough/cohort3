import { isLogicalExpression } from "@babel/types";

// const varName = .....
//let variable = ......

const functions = {
    // 2019-11-06 : "More Array Exercises (Really)" 
    filterBalance1000: (array) => {
     let filteredArray = array.filter(el => {
         return el.balance >= 1000;
     }); let mappedArray = filteredArray.map( el => el.balance );
     return mappedArray;
    },


    //2019-OCT-29: "More Array Exercises"
    // 1.write a function to receive the same array (staff) and return the total of balances

    loopStaffTotal: (array) => {
        let total = array.reduce((accumulator, people) =>
            accumulator + people.balance, 0);
        return total;
    },

    // 2. write a function to receive the same array (staff) and return the average the balances

    loopStaffAverage: (array) => {
        let totalAccum = functions.loopStaffTotal(array);
        let average = totalAccum / array.length;
        return Number(average.toFixed(2));
    },



    //2019-OCT-25 : "loopStaff each / map"

    loopStaffForEach: (array) => {
        let staffEmailArray = [];
        array.forEach(i => {
            var newMEO = functions.makeEmailObj(i);
            staffEmailArray.push(newMEO);
        }); return staffEmailArray;
    },

    loopStaffMap: (array) => {
        let staffEmail = array.map(functions.makeEmailObj);
        return staffEmail;
    },



    //2019-OCT-24 : "loopStaff: in / of"

    loopStaffIn: (array) => {
        let staffEmailArray = [];

        for (z in array) {
            let staffInLoop = functions.makeEmailObj();
            staffEmailArray.push(staffInLoop);
        } return staffEmailArray;

    },

    // loopStaffOf: () => {
    // let staffEmailArray=[];

    // },





    // //2019-OCT 22 : "LOOPSTAFF"
    loopStaff: (staffArr) => {
        let staffEmail = staffArr.map(functions.makeEmailObj);
        return staffEmail;
    },

    //2019-OCT-18 WHATS MY COVERAGE

    // Run your coverage report and send the output to Larry as a pdf file. Follow these steps:

    //2019-OCT-16/17 : MORE WITH ARRAYS

    // 'sort' function
    sortJungle: (jungle) => {
        // let jungle = ["tiger", "toucan", "leopard","gorilla"];
        jungle.sort();
        return jungle;
    },

    // 'filter' function
    filteredFunctionBigSmall: (numbersBigAndSmall) => {
        // let numbersBigAndSmall= [0,2,4,6,8,10];
        let filteredNumbersBigSmall = numbersBigAndSmall.filter(function (number) {
            return number > 4;
        }); return filteredNumbersBigSmall;
    },

    // 'reduce' function
    reduceFunctionSum: (numberSum) => {
        // let numberSum = [1,-1,4,6];
        let sum = numberSum.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0); return sum;
    },

    // 'map' function
    mapNumSquared: (numNumbers) => {
        // let numNumbers = [1,2,3,4];
        let numSquared = numNumbers.map(function (number) {
            return number * number;

        }); return numSquared;
    },

    // 'forEach'function
    forEachFruits: (fruits) => {
        // let fruits = ["apples", "grapes", "oranges"]
        let emptyFruits = [];

        fruits.forEach(function (item) {
            emptyFruits.push(item + " are cool!")
        }); return emptyFruits;
    },

    //splice function
    splicedNewZoo: (zoo) => {
        // let zoo = ["apes","camels","peacock","lion","tiger"];
        let slicedZoo = zoo.splice(1, 1, "hippos");
        return zoo;
    },

    //slice function
    slicedNewFarm: (farm) => {
        // let farm = ["cattle", "boar", "horse", "chickens"];
        let sliceFarm = farm.slice(3, 4);
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
            let sweet = 0;
            for (let y of animals) {
                sweet = y + cute;

            } return sweet;
        },

    // 'dowhile' loop
    // counterTwo: 10,

    doWhileFunction: (counterTwo) => {
        do {
            // console.log(counterTwo);
            counterTwo--;
        } while (counterTwo > 0);
        return counterTwo;
    },

    // 'while' function
    countDown: (numberCountDown) => {

        while (numberCountDown > 0) {
            // console.log(numberCountDown);
            numberCountDown--;
        }; return numberCountDown;
    },

    // 'for' function
    toDoGroceries: (arrayToDo) => {
        for (let itemList = 0; itemList < arrayToDo.length; itemList++) {
            arrayToDo[itemList] = arrayToDo[itemList] + "!";

        }; return arrayToDo;
    },

    //2019-OCT-11 makeEmailObjrecieves object**
    makeEmailObj: (objNames) => {
        let objectNames = objNames;
        const firstObjName = objectNames["fname"].toLowerCase();
        const lastObjName = objectNames["lname"].toLowerCase();
        let atEvolveU = "@evolveu.ca"
        return firstObjName + "." + lastObjName + atEvolveU;
    },

    //2019-OCT-09 makeEmailArr recieve array**
    makeEmailArr: (names) => {
        let arrayNames = names;
        const firstName = arrayNames[0].toLowerCase();
        const lastName = arrayNames[1].toLowerCase();
        let atEvolveU = "@evolveu.ca"
        return firstName + "." + lastName + atEvolveU;
    },

    //2019-OCT-07 assertEquals 
    assertEquals: (a, b) => {
        if (a === b) {
            return true;
        } else if (a !== b) {
            // console.log(a, b);
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
