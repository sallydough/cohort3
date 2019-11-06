import functions from "./functions.js";

// import functions from './functions.js'


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