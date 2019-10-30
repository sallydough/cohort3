import functions from './2019-10-30dom.js'


idButton.addEventListener("click", () => {
    functions.helloWorldDom("quote");
});

idBigDiv.addEventListener("click", () => {
    console.log(event.target, event.target.getAttribute("count")); //'event.target'- on the click event, it will target certain HTML code
    console.log(event.target.parentElement);        //parent allows you to find parent element
    console.log(event.target.parentElement.children);

});

let bigDivGetEle = document.getElementById("idBigDiv")
let count = 4;
idAddDiv.addEventListener("click", () => {
    let newAddedDiv = document.createElement("div");
    // let newCountChild=bigDivGetEle.childElementCount;
    bigDivGetEle.appendChild(newAddedDiv);
    newAddedDiv.className = "bodyDiv1";
    newAddedDiv.textContent = `number ${count}`;
    newAddedDiv.setAttribute("count", count++);

})

