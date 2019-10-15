import functions from "./daily"

//assertEquals 2019OCT07

test("give me the true or false", () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);
});

//makeEmailArr 2019OCT09 recieve array**

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

//makeEmailObj 2019OCT11 recieves object**

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

// Great test requires:
// [1] tests need to be rerunable
// [2] ideal test is based on a pure function = has specific input, and one output
// 
//[1] import functionName from "./functionsource"
//[2] test ("name for your test", () => {
//       expect(functionName(parameter1,parameter2)).tobe(datatype);
//       expect(functionName(parameter1,parameter2)).tobe(datatype);
//       expect(functionName(parameter1,parameter2)).tobe(datatype);
//       expect(functionName(parameter1,parameter2)).tobe(datatype);
//     });









// import functions from './functions'

// test('Check the sizes', () => {
//     expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
//     expect(functions.size(0)).toBe("small");
//     expect(functions.size(10)).toBe("medium");
//     expect(functions.size(15)).toBe("medium");
//     expect(functions.size(20)).toBe("large");
//     expect(functions.size(2000000)).toBe("large");
// });

// test('Does that add function work?', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// })