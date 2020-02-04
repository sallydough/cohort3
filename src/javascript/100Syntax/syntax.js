const functions = {

    // identifies numbers
    variableNumb: (num1, num2) => {
        return num1 + num2;
    },

    //identifies strings ("written in quotations")
    stringTest: (name) => {
        return name;
    },

    //identifies if statement is true or false
    booleanTest: (number) => {
        if (number >= 10) {
            return true;
        } return false;
    },

    // array with multiple properties
    arrayTest: (arrayNum) => {
        let arrayList = ["one", "2", "three", 4, 5, "six"]
        if (arrayNum === 1) return arrayList[0];
        if (arrayNum === 2) return arrayList[1];
        if (arrayNum === 3) return arrayList[2];
        if (arrayNum === 4) return arrayList[3];
        if (arrayNum === 5) return arrayList[4];
        if (arrayNum === 6) return arrayList[5];
        return "Try Again: Enter a number between 1-6;"
    },

    //an object which contains key values with properties
    objectTest: (key) => {

        let rainbow = {
            red: "firetrucks bloodily beating on strawberries",
            orange: "tigers ferociously drinking orange juice",
            yellow: "Ducks rigorously reinventing bananas into lemons",
            green: "Goblins gallantly dance across the grassy fields",
            blue: "I'm blue, if I was green I would die dabba dee dabba die",
            purple: "red and blue mixed"
        };
        if (rainbow.hasOwnProperty(key)) return rainbow[key];
        return "please enter a rainbow colour";
    },

    //variable without a value
    undefinedTest: (car) => {
        console.log(car);
    },

    //evaluates 'if' condition is true - if so, carries out 'if' function - if not, with carry out 'else' statement
    ifElseTest: (num) => {
        if (num <= 10) {
            return "I will cut off your fingers";
        } else { return "Please enter number less than 10" }
    },

    parametersTest: (p1, p2) => {
        if (p1 !== Number(p1) || p2 !== Number(p2)) {
            return "Please enter valid digit";
        }

        const added = Number(p1) + Number(p2);
        return added;
    },

    returnTest: (v1, v2, v3, v4) => {
        let name = v1;
        let toy = v2;
        let priceOne = Number(v3);
        let priceTwo = Number(v4);
        let sum = priceOne + priceTwo;
        if (v3 !== Number(v3) || v4 !== Number(v4)) {
            return "Please enter valid number";
        }
        return name + " wants to buy a " + toy + ". It will cost " + sum + " dollars.";
    },

    addFrontArrayTest: (add) => {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.unshift(add);    // Adds a new element "Lemon" to fruits
        if (fruits[1] === "Banana") return "Item added to the front";
    },

    addEndArrayTest: (end) => {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.push(end);
        if (fruits[4] === end) return "Your item has been added to the end, yo!"
    },

    updateValuesArrayTest: (uv) => {

        let updateValuesArray = [1, 2, 3, 4, 5];
        updateValuesArray[4] = uv;
        return updateValuesArray[4];
    },

    //loops

    //for
    forTest: (num) => {
        for (let i = 0; i < num.length; i++) {
            return "You have " + i + "moves left";
        }
    }


}

export default functions;



// be creative; write tests and code to prove to yourself that you understand the concepts of each line. Remember the steps:
// write a stub
// write a test that fails
// write the code for the test to pass
// run the test
// repeat
// (we will soon start learning about a concept called refactoring)
// make sure your code and comments are very very very aesthetically pleasing. 
// We will be comparing (but it’s not a competition). 
// Comments should not have the details we can read in the code but should explain the approach or the concept. 
// Work in pairs / groups to ensure you are incorporating everyone's great ideas. 
// Be creative. Write some awesome code and tests and show off your results. 
// We will be doing group code reviews.
// when debugging your code insert a good text description to describe where you are in the code and what parameter you are spitting out in your console logs. 








// define attributes / variables
// number
// string
// boolean
// array
// dictionary / objects
// undefined
// sample if / else

// functions
// parameters
// returns

// arrays
// add to the front
// add to the end
// update values

// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)


// Objects / Dictionaries
// declare object
// lookup key to retrieve value
