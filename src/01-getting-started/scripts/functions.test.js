import functions from './functions'
/////////////////size////////////////////////////
test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

// test('Does that add function work?', () => {
//     expect(functions.add(1, 2)).toBe(3);
//     expect(functions.add(101, 202)).toBe(303);
// });

///////////////Calculator/////////////////////

//sum function
test('sum', () => {
    expect(functions.sum(2, 1)).toEqual(3);
});
//subtract function
test('subtract', () => {
    expect(functions.subtract(2, 1)).toEqual(1);
    expect(functions.subtract(-10, -1)).toEqual(-9);
    expect(functions.subtract(0, "s")).toEqual(NaN);
});
//multiply function
test('multiply', () => {
    expect(functions.multiply(10, 2)).toEqual(20);
});
//divide function
test('divide', () => {
    expect(functions.divide(2, 1)).toEqual(2);
});

///////////////Canadian Taxes////////////////
test("helloWorld", () => {
    console.log("hi halloweeners");
    functions.helloHalloween();
});

//test for basket top range number
test("federtaxbasket test", () => {
    expect(functions.CanadaFederalTax(-3)).toBe(0); //negative income
    expect(functions.CanadaFederalTax(0)).toBe(0); //zero income
    expect(functions.CanadaFederalTax(47630)).toBe(7144.50); // 0-47630 income range
    expect(functions.CanadaFederalTax(95259)).toBe(16908.445); //47360-95259 income range
    expect(functions.CanadaFederalTax(147667)).toBe(30534.525); // 95259-147667 income range
    expect(functions.CanadaFederalTax(210371)).toBe(48718.685); // 147667-210371 income range
    expect(functions.CanadaFederalTax(210372)).toBe(48719.015); // >210371 income range 
});

//////////////Array////////////////////

test("working with arrays", () => {
    console.log("hello Working With Array World");
    functions.hiArrayWorld();
});

test("Working with Arrays", () => {
    expect(functions.add(5)).toBe("5 has been added to your array");
    expect(functions.add("string")).toBe("The input is not a valid number");
    expect(functions.show([6, 7, 8])).toBe("6,7,8");
    expect(functions.total([20, 30, 10])).toBe(60);
    expect(functions.clear()).toEqual([]);
});

