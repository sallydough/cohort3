import functions from "./syntax"

// test("give me the true or false", () => {
//     expect(assertEquals("a","b")).toBe(false);
//     expect(assertEquals("a","a")).toBe(true);
//     expect(assertEquals(1,2)).toBe(false);
//     expect(assertEquals(2,2)).toBe(true);
//     expect(assertEquals("2",2)).toBe(false);
//     expect(assertEquals("This value","This value")).toBe(true);
// });

test("test my numType", () => {
    expect(functions.variableNumb(1,2)).toEqual(3);
});

test("test my stringTest", () => {
    expect(functions.stringTest("Sally")).toBe("Sally");
    expect(functions.stringTest("Anita")).toBe("Anita"); 
    expect(functions.stringTest("Kevin")).toBe("Kevin");  
});

test("test my booleanTest", () => {
    expect(functions.booleanTest(3)).toBe(false);
    expect(functions.booleanTest(11)).toBe(true); 
    expect(functions.booleanTest(10)).toBe(true);    

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