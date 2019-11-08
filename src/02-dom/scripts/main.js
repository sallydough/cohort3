import functions from './functions.js'

idButtonShow.addEventListener("click", () => {
    console.log("show button clicked")
    functions.showButtonFunction();
});

idBasicDOM.addEventListener("click", () => {
    console.log(event.target);
});

let count= 1;
idButtonAdd.addEventListener("click", () => {
    let newAddedList = document.createElement("li");
    idOL.appendChild(newAddedList);
    newAddedList.textContent = `Item Number ${count++}`;
});