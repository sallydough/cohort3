import functions from './functions.js'

idBasicDOMLeft.addEventListener("click", () => {
    console.log(event.target);
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

idAddingFull.addEventListener("click", () => {
    let ultimateParentDiv = document.getElementById("idBasicDOMLeft");
    let newAddedFull = functions.createCard(ultimateParentDiv);
    // idBasicDOMLeft.appendChild(newAddedFull);
});

// addbefore${functions.count}.

// addBefore.addEventListener("click", () => {
//     console.log("idAddBefore button clicked");
// })

// idAddAfter.addEventListener("click", () => {
//     console.log("idAddAfter button clicked");
// })

// idDelete.addEventListener("click", () => {
//     console.log("idDelete button clicked");
// })