import functions from "./daily"

// 2019-OCT-15 PREP FOR ARRAY

// 'for in' loop
// test('while loop for forInFunction', () => {
    
//     expect(functions.forInFunction([10])).toEqual(0);
//     expect(functions.forInFunction([9])).toEqual(0);
//     expect(functions.forInFunction(-1)).toEqual(-1);
// });

//'for of' loop
test('while loop for animalJudgement', () => {
    let animals = ["pigs","bunnies","lambs","cows","ducks"];
    expect(functions.animalJudgement(animals)).toBe("ducks are so damn cute!");
    expect(functions.animalJudgement(["Lawrence"])).toBe("Lawrence are so damn cute!");
    expect(functions.animalJudgement(["Sally",12])).toBe("12 are so damn cute!");
});

//'dowhile' loop
test('do/while loop for doWhileFunction', () => {
    
    expect(functions.doWhileFunction(10)).toBe(0);
    expect(functions.doWhileFunction(3)).toBe(0);
    expect(functions.doWhileFunction(-1)).toBe(-2);
});

//'while' loop
test('while loop for countDown', () => {
    let numberCountDown = [10,9,8,7,6,5,4,3,2,1,0];
    expect(functions.countDown([10])).toEqual(0);
    expect(functions.countDown([9])).toEqual(0);
    expect(functions.countDown(-1)).toEqual(-1);
});

//'for' loop
test('for loop for toDoGroceries', () => {
    let toDos = ["brush teeth", "wash hands", "walk dog", "eat cake"];
    expect(functions.toDoGroceries(toDos)).toStrictEqual(["brush teeth!", "wash hands!", "walk dog!", "eat cake!"]);
    expect(functions.toDoGroceries(["buy pears"])).toStrictEqual(["buy pears!"]);
    expect(functions.toDoGroceries(["eggs"])).toStrictEqual(["eggs!"]);
});

//2019-OCT-11 makeEmailObjrecieves object**

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

//2019-OCT-09 makeEmailArr recieve array**

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

//2019-OCT-07 assertEquals 

test("give me the true or false", () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);
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