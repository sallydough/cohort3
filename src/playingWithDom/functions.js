const functions = {

counter: 0,

createCard: (parentDiv) => {
    functions.counter++;
    let newDiv = document.createElement("div");
    newDiv.textContent = `Card Number ${functions.counter} `;
    newDiv.id = `idCardNumber${functions.counter}`;
    newDiv.setAttribute("count", functions.counter);
    newDiv.setAttribute("class", "cardFullArea");   
    parentDiv.appendChild(newDiv);
    let addBefore = document.createElement("button");
    let addAfter = document.createElement("button");
    let  deleteBut = document.createElement("button");
    newDiv.appendChild(addBefore);
    newDiv.appendChild(addAfter);
    newDiv.appendChild(deleteBut);
    addBefore.id = `addBefore${functions.counter}`
    addAfter.id = `addAfter${functions.counter}`
    deleteBut.id = `deleteBut${functions.counter}`
    addBefore.textContent = `Add Before`
    addAfter.textContent = `Add After`
    deleteBut.textContent = `delete`

    return newDiv;
}
};
export default functions;