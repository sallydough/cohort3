import functions from './functions.js'

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
