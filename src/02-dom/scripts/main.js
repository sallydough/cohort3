import functions from './functions.js'

idBasicDOMLeft.addEventListener("click", () => {
    console.log(event.target);
    if(event.target.innerText == 'Add Before') {
        console.log(event.target.parentElement);
        let parentDiv = event.target.parentElement;
        let newDiv = functions.createCard(parentDiv);
        idBasicDOMLeft.insertBefore(newDiv, parentDiv);
    } else if (event.target.innertext == "Add After") {
        console.log(event.target.parentElement.nextSibling);
        let parentDivv = event.target.ParentElement.nextSibling
        let newDiv = functions.createCard(parentDivv);
        idBasicDOMLeft.insertBefore(newDiv, parentDivv);
        // function next Sibling;
    } else if (event.target.innertext == "delete") {
        //funciton delete
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

idAddingFull.addEventListener("click", () => {
    let ultimateParentDiv = document.getElementById("idBasicDOMLeft");
    let newAddedFull = functions.createCard(ultimateParentDiv); 
    idBasicDOMLeft.appendChild(newAddedFull);
});

// addbefore.addEventListener("click", () => {
//     console.log("add before clicked");

// });

// addBefore.addEventListener("click", () => {
//     console.log("idAddBefore button clicked");
// })

// idAddAfter.addEventListener("click", () => {
//     console.log("idAddAfter button clicked");
// })

// idDelete.addEventListener("click", () => {
//     console.log("idDelete button clicked");
// })