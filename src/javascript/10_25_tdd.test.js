/* steps to write first test:
    ----write concole log of test & function and pass each to know they both work    
1. Write the stub (function name, parameters, return dummy result)
2. Write successful test but it will fail because of function dummy result
3. Write minumun code in function to make test pass (function { return right answer})
4. npm test and it should pass
5. Go into function and make it legit pass using proper code(parameters)
4. Write another test
5.fail
6.write code
7.continue until done
5. Repeat 
6. refactor
*/


import functions from './10_25_tdd.js'

test('helloworld test', () => {
    console.log("hello World");
    functions.helloWorld("hello world whats good?");
});


test('sum', () => {
    expect(functions.sum(2, 1)).toEqual(3);
});