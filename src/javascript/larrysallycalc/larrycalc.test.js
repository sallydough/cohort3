import functions from './larrycalc.js'

test('larrytests', () => {
    console.log("Hello World");
    functions.helloworld("hello world from larrycalc");

});

test('larry sum', () => {
    expect(functions.sum(2, 3)).toEqual(5);
    expect(functions.sum(-1, 10)).toEqual(9);
    expect(functions.sum(0, 0)).toEqual(0);
});

test('multiply calc', () => {
    expect(functions.sum(200,0)).toEqual(300);
})