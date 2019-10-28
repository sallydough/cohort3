import functions from "./daily"
//2019-OCT 22 :"LOOPSTAFF"

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


//OCT 16-17 : "More Array Work"

//sort function
test('does my sortJungle work?', () => {
    let jungle = ["tiger", "toucan", "leopard","gorilla"];
    expect(functions.sortJungle(["tiger", "toucan", "leopard","gorilla"])).toEqual(["gorilla","leopard","tiger", "toucan"]);
    expect(functions.sortJungle(["a", "d", "c", "b"])).toEqual(["a", "b", "c", "d"]);
    expect(functions.sortJungle(["cattle", "boar","ducks"])).toEqual(["boar", "cattle", "ducks"]);
});

// 'filter' function
test('does my filteredFunctionBigSmall work?', () => {
    let numbersBigAndSmall= [0,2,4,6,8,10];
    expect(functions.filteredFunctionBigSmall ([0,1,2,3,4,5,6])).toEqual([5,6]);
    expect(functions.filteredFunctionBigSmall ([-1,3,-2,8,4,-10])).toEqual([8]);
    expect(functions.filteredFunctionBigSmall ([2,6,8,5,0,-1])).toEqual([6,8,5]);
});


// 'reduce' function
test('does my reduceFunctionSum work?', () => {
    let numberSum = [1,-1,4,6];
    expect(functions.reduceFunctionSum([1,-1,4,6])).toEqual(10);
    expect(functions.reduceFunctionSum([5,6])).toEqual(11);
    expect(functions.reduceFunctionSum([10,200,45])).toEqual(255);
});


// 'map' function
test('does my mapNumSquared work?', () => {
    let numNumbers = [1,2,3,4];
    expect(functions.mapNumSquared([1,2,3,4])).toEqual([1,4,9,16]);
    expect(functions.mapNumSquared([5,6])).toEqual([25,36]);
    expect(functions.mapNumSquared([10,200,45])).toEqual([100,40000,2025]);
});

// 'forEach'function
test('does my forEachFruits work?', () => {
    let fruits = ["apples", "grapes", "oranges"]
    expect(functions.forEachFruits(["apples", "grapes", "oranges"])).toEqual(["apples are cool!", "grapes are cool!", "oranges are cool!"]);
    expect(functions.forEachFruits(["cattles", "boars"])).toEqual(["cattles are cool!", "boars are cool!"]);
    expect(functions.forEachFruits(["anitas","sallys","kevins"])).toEqual(["anitas are cool!","sallys are cool!","kevins are cool!"]);
});

//spliced function
test('does my splicedNewZoo work?', () => {
    let zoo = ["apes","camels","peacock","lion","tiger"];
    expect(functions.splicedNewZoo(["apes","camels","peacock","lion","tiger"])).toEqual(["apes","hippos","peacock","lion","tiger"]);
    expect(functions.splicedNewZoo(["cattle", "boar", "horse", "goats"])).toEqual(["cattle", "hippos", "horse", "goats"]);
    expect(functions.splicedNewZoo(["anita","camels","sally","kevin","tiger"])).toEqual(["anita","hippos","sally","kevin","tiger"]);
    expect(functions.splicedNewZoo(["cattle", "boar","rat", "cats", "dogs", "horse", "goats"])).toEqual(["cattle", "hippos","rat", "cats", "dogs", "horse", "goats"]);
});

//slice function
test('does my slicedNewFarm work?', () => {
    let farm = ["cattle", "boar", "horse", "chickens"];
    expect(functions.slicedNewFarm(["cattle", "boar", "horse", "chickens"])).toEqual(["chickens"]);
    expect(functions.slicedNewFarm(["cattle", "boar", "horse", "goats"])).toEqual(["goats"]);
    expect(functions.slicedNewFarm(["cattle", "boar","ducks", "horse", "goats"])).toEqual(["horse"]);
    expect(functions.slicedNewFarm(["cattle", "boar","rat", "cats", "dogs", "horse", "goats"])).toEqual(["cats"]);
});


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