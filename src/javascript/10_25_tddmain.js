import functions from './10_25_tdd.js'


console.log("Hello World from 10_25_tddmain.js");
console.log("hello World");

//add event listener when I click on 'idDoIt' button: */
idDoIt.addEventListener("click", () => {
    //

    let firstNumInput = Number(idEnterFirstNum.value);
    let secondNumInput = Number(idEnterSecondNum.value);
    console.log(firstNumInput, secondNumInput);
    functions.helloWorld("quote");

    const sumNum1 = functions.sum(firstNumInput, secondNumInput);
    console.log(sumNum1);


});
//Add button
// idAdd.addEventListener("click", () => {


//     let firstNumInput = Number(idEnterFirstNum.value);
//     let secondNumInput = Number(idEnterSecondNum.value);
//     // console.log(firstNumInput , secondNumInput);
//     functions.sum();

// });