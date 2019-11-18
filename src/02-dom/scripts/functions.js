const functions = {

    helloDOMWorld: () => {
        console.log("hello DOM world from functions.js");
    },

    counter: 0,

    // createItem: () => {},


    createCard: (parentDiv) => {
        functions.counter++;
        let newDiv = document.createElement("div");
        newDiv.textContent = `Card Number ${functions.counter} `;
        newDiv.id = `idCardNumber${functions.counter}`;
        // newDiv.setAttribute("group", functions.counter);
        newDiv.setAttribute("class", "cardFullArea");   
        // parentDiv.appendChild(newDiv);
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
        addBefore.setAttribute("name", "addBefore");
        addAfter.setAttribute("name", "addAfter");
        deleteBut.setAttribute("name", "deleteBut");

        return newDiv;
    },

    addBeforeButton: (parentDiv, idBasicDOMLeft) => {
        console.log(parentDiv);
        let newDiv = functions.createCard(parentDiv);
        idBasicDOMLeft.insertBefore(newDiv, parentDiv);
    },

    addAfterButton: (parentDivv, idBasicDOMLeft) => {
        console.log(parentDivv);
        let newDiv = functions.createCard(parentDivv);
        idBasicDOMLeft.insertBefore(newDiv, parentDivv);
    },

    deleteButton: () => {
        let DelDiv = event.target.parentNode;
        DelDiv.remove();
    },

    showButtonFunction: () => {
       console.log(idBasicDOMLeft.childNodes);
    },


}

export default functions;