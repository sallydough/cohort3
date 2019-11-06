import functions from './functions.js';

////////////////////size/////////////////////////////////

// const idNumber = document.getElementById("idNumber")
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

///////////////////////Calculator//////////////////////////
function grab2InputValues () {
    let firstNumInput = Number(idEnterFirstNum.value);
    let secondNumInput = Number(idEnterSecondNum.value);
    console.log(firstNumInput , secondNumInput);
};

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

//////////////////////////////////////TAX CALCULATOR ///////////////////////

idCalcTax.addEventListener("click", () => {
    functions.helloHalloween();
    const taxFinalResult= functions.CanadaFederalTax(idIncomeValue.value);
    idTaxResult.value= taxFinalResult.toFixed(2);
});

//////////////////////Array///////////////////////////////

let arrayEmpty = [];

idAddItem.addEventListener("click", () => {
    console.log("clicked 'Add' button");
    let addedItem = functions.add(Number(idInputValueField.value));
    console.log(addedItem);
    arrayEmpty.push(Number(idInputValueField.value));
    console.log(arrayEmpty);
    idMessageArea.textContent = addedItem;
    idInputValueField.value = "";
});

idShow.addEventListener("click", () => {
    console.log("clicked 'Show' button");
    let showArray = functions.show(arrayEmpty);
    idMessageArea.textContent = `Your current array is: ${showArray}`;
});

idTotal.addEventListener("click", () => {
    console.log("clicked 'Total' button");
    let totalArray = Number(functions.total(arrayEmpty));
    idMessageArea.textContent = `The total sum of your array is: ${totalArray}`;
    console.log(totalArray);
});

idClear.addEventListener("click", () => {
    console.log("clicked 'Clear' button");
    arrayEmpty = [];
    idInputValueField.value = "";
    idMessageArea.textContent = "Array Cleared";
    console.log(arrayEmpty);
});

////////////////Dictionary///////////////////

idShowButton.addEventListener("click", () => {
    console.log("Province Search Button has been Clickitty Clacked");
    let clickedProvince = functions.findProvinceSearch(idSearchTextBox.value);
    idMessageAreaProvince.textContent = `Province: ${clickedProvince}`;
    console.log(clickedProvince);
    idSearchTextBox.value = "";
});