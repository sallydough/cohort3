import functions from './10_25_tdd.js'


console.log("Hello World from 10_25_tddmain.js");

function grab2InputValues () {
    let firstNumInput = Number(idEnterFirstNum.value);
    let secondNumInput = Number(idEnterSecondNum.value);
    console.log(firstNumInput , secondNumInput);
};

//'idDoIt' button: */
idDoIt.addEventListener("click", () => {
    grab2InputValues();
    functions.helloWorld("quote");

});

//Add button Event Listener
idAdd.addEventListener("click", () => {
    grab2InputValues();
    const sumNum1 = functions.sum(Number(idEnterFirstNum.value), Number(idEnterSecondNum.value));
    console.log(sumNum1);
    idAnswer.value = sumNum1;

});

// Subtract button Event Listener
idSubtract.addEventListener("click", () => {
    grab2InputValues();
    const subtractNum1 = functions.subtract(Number(idEnterFirstNum.value), Number(idEnterSecondNum.value));
    console.log(subtractNum1);
    idAnswer.value = subtractNum1;

});

// Multiply button Event Listener
idMultiply.addEventListener("click", () => {
    grab2InputValues();
    const multiplyNum1 = functions.multiply(Number(idEnterFirstNum.value), Number(idEnterSecondNum.value));
    console.log(multiplyNum1);
    idAnswer.value = multiplyNum1;

});

// Divide button Event Listener
idDivide.addEventListener("click", () => {
    grab2InputValues();
    const divideNum1 = functions.divide(Number(idEnterFirstNum.value), Number(idEnterSecondNum.value));
    console.log(divideNum1);
    idAnswer.value = divideNum1;

});

