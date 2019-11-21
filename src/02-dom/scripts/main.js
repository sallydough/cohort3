import functions from './functions.js'


let counter = 0;

idAddingFull.addEventListener("click", () => {
    counter++;
    let ultimateParentDiv = document.getElementById("idBasicDOMLeft");
    let newAddedFull = functions.createCard(ultimateParentDiv, counter);
    idBasicDOMLeft.appendChild(newAddedFull);
});

idBasicDOMLeft.addEventListener("click", () => {
    console.log(event.target);
    if (event.target.name == 'addBefore') {
        let parentDiv = event.target.parentElement;
        functions.addBeforeButton(parentDiv, idBasicDOMLeft, counter);     
    } else if (event.target.name == "addAfter") {
        let parentDivv = event.target.parentElement.nextSibling;
        functions.addAfterButton(parentDivv, idBasicDOMLeft, counter);
    } else if (event.target.name == "deleteBut") {
        functions.deleteButton(event.target, counter);
    }
});

idButtonShow.addEventListener("click", () => {
    console.log("show button clicked");
    functions.showButtonFunction();
});

let count = 1;
idButtonAdd.addEventListener("click", () => {
    let newAddedList = document.createElement("div");
    idBasicDOMLeft.appendChild(newAddedList);
    newAddedList.textContent = `Item Number ${count}`;
    newAddedList.setAttribute("count", count++);
    newAddedList.setAttribute("class", "cardArea");
});

