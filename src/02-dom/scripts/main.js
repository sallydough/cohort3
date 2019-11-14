import functions from './functions.js'

idButtonShow.addEventListener("click", () => {
    console.log("show button clicked")
    functions.showButtonFunction();
});

idBasicDOMLeft.addEventListener("click", () => {
    console.log(event.target);
});

//////////////////random//////////////
// let count= 1;
// idButtonAdd.addEventListener("click", () => {
//     let newAddedList = document.createElement("li");
//     idOL.appendChild(newAddedList);
//     newAddedList.textContent = `Item Number ${count}`;
//     newAddedList.setAttribute("count", count++)
// });

let count = 1;
idButtonAdd.addEventListener("click", () => {
    let newAddedList = document.createElement("div");
    idBasicDOMLeft.appendChild(newAddedList);
    newAddedList.textContent = `Item Number ${count}`;
    newAddedList.setAttribute("count", count++);
    newAddedList.setAttribute("class", "cardArea");
});

idAddingFull.addEventListener("click", () => {
    let newAddedFull = functions.createCard();
    idBasicDOMLeft.appendChild(newAddedFull);
})


// let bigDivGetEle = document.getElementById("idBigDiv")
// let count = 4;

// idAddDiv.addEventListener("click", () => {
//     let newAddedDiv = document.createElement("div");
//     // let newCountChild=bigDivGetEle.childElementCount;
//     bigDivGetEle.appendChild(newAddedDiv);
//     newAddedDiv.className = "bodyDiv1";
//     newAddedDiv.textContent = `Card Number ${count}`;
//     newAddedDiv.setAttribute("count", count++);