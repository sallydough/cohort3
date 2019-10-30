import functions from './functions'
//size 
test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(101, 202)).toBe(303);
});

//Calculator

//sum function
test('sum', () => {
    expect(functions.sum(2, 1)).toEqual(3);
});
//subtract function
test ('subtract', () => {
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

//Canadian Taxes

test('hello world', () => {
    let income= [1, 47000];
    expect(functions.helloTaxWorld(income[0])).toEqual(0.15);
    expect(functions.helloTaxWorld(income[1])).toEqual(7050);
    // expect(functions.helloTaxWorld(income)).toEqual(7637.2);
    // expect(functions.helloTaxWorld(income)).toEqual(7637.2);
});
