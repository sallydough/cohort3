import functions from "./syntax.js"

// test("give me the true or false", () => {
//     expect(assertEquals("a","b")).toBe(false);
//     expect(assertEquals("a","a")).toBe(true);
//     expect(assertEquals(1,2)).toBe(false);
//     expect(assertEquals(2,2)).toBe(true);
//     expect(assertEquals("2",2)).toBe(false);
//     expect(assertEquals("This value","This value")).toBe(true);
// });

//number
test("test my numType", () => {
    expect(functions.variableNumb(1,2)).toEqual(3);
});

//string
test("test my stringTest", () => {
    expect(functions.stringTest("Sally")).toBe("Sally");
    expect(functions.stringTest("Anita")).toBe("Anita"); 
    expect(functions.stringTest("Kevin")).toBe("Kevin");  
});

//boolean
test("test my booleanTest", () => {
    expect(functions.booleanTest(3,2)).toBe(true);
    expect(functions.booleanTest(11,20)).toBe(false); 
    expect(functions.booleanTest(10,10)).toBe(true);    
});

//array
test( "arrayTest", () => {
    expect(functions.arrayTest(1)).toBe("one");
    expect(functions.arrayTest(2)).toBe("2");
    expect(functions.arrayTest(3)).toBe("three");
    expect(functions.arrayTest(4)).toBe(4);
    expect(functions.arrayTest(5)).toBe(5);
    expect(functions.arrayTest(6)).toBe("six");
});

//object
test("objectTest", () => {
    expect(functions.objectTest("red")).toBe("firetrucks bloodily beating on strawberries");
    expect(functions.objectTest("yellow")).toBe("Ducks rigorously reinventing bananas into lemons");
    expect(functions.objectTest("orange")).toBe("tigers ferociously drinking orange juice");
    expect(functions.objectTest("blue")).toBe("I'm blue, if I was green I would die dabba dee dabba die");
    expect(functions.objectTest(1)).toBe("please enter a rainbow colour");
    expect(functions.objectTest(NaN)).toBe("please enter a rainbow colour");
});

//undefined
test("undefinedTest", () => {
    expect(functions.undefinedTest()).toBe(undefined);
    expect(functions.undefinedTest(10)).toBe(undefined);
    expect(functions.undefinedTest("wassup")).toBe(undefined);
    expect(functions.undefinedTest(true)).toBe(undefined);
});

//if/else
test("ifElseTest", () => {
    expect(functions.ifElseTest(1)).toBe("I will cut off your fingers");
    expect(functions.ifElseTest(11)).toBe("Please enter number less than 10");
    expect(functions.ifElseTest(-1)).toBe("I will cut off your fingers");
    
});

//parameter
test("parameterTest", () => {
    expect(functions.parametersTest(1,0)).toBe(1);
    expect(functions.parametersTest("sss",0)).toBe("Please enter valid digit");
    expect(functions.parametersTest(5,true)).toBe("Please enter valid digit");
});

//return
test("returnTest", () => {
    expect(functions.returnTest("Billy","bear", 3, 4)).toBe("Billy wants to buy a bear. It will cost 7 dollars.");
    expect(functions.returnTest("Billy","bear", "2", 4)).toBe("Please enter valid number");
    expect(functions.returnTest("Billy","bear", "2", "s")).toBe("Please enter valid number");
});

//addFrontArray
test( "addFrontArrayTest", () => {
    expect(functions.addFrontArrayTest("hi")).toBe("Item added to the front");
    expect(functions.addFrontArrayTest(true)).toBe("Item added to the front");
    expect(functions.addFrontArrayTest(undefined)).toBe("Item added to the front");
    expect(functions.addFrontArrayTest(-1)).toBe("Item added to the front");
    expect(functions.addFrontArrayTest(NaN)).toBe("Item added to the front");
});

//addEndArray
test( "addFrontArrayTest", () => {
    expect(functions.addEndArrayTest("hi")).toBe("Your item has been added to the end, yo!");
    expect(functions.addEndArrayTest(true)).toBe("Your item has been added to the end, yo!");
    expect(functions.addEndArrayTest(undefined)).toBe("Your item has been added to the end, yo!");
    expect(functions.addEndArrayTest(-1)).toBe("Your item has been added to the end, yo!");
});

//addEndArray
test( "updateValuesArrayTest", () => {
    expect(functions.updateValuesArrayTest("Sally")).toBe("Sally");
});

//forTest
test( "ForTest", () => {
    expect(functions.forTest(1)).toEqual([0]);
    expect(functions.forTest(-1)).toEqual([]);
    expect(functions.forTest(7)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(functions.forTest("pie")).toEqual("Enter a number, fool!");
});

//forInTest
test( "ForInTest", () => {
    expect(functions.forInTest({ name: "Bug", power: "kindness", favFood: "kind people"})).toBe(" Bugkindnesskind people");
    expect(functions.forInTest(1)).toEqual("Please enter an object, dammit!");
});




















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
// lookup key to retrieve //