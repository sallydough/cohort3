import functions from './functions.js'

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
