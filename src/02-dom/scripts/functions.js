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
        newDiv.setAttribute("class", "cardFullArea");  
        newDiv.setAttribute("key", functions.counter); 
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
        let newDiv = functions.createCard(parentDiv);
        idBasicDOMLeft.insertBefore(newDiv, parentDiv);
    },

    addAfterButton: (parentDiv, idBasicDOMLeft) => {
        let newDiv = functions.createCard(parentDiv);
        idBasicDOMLeft.insertBefore(newDiv, parentDiv);
    },

    deleteButton: (parentDiv) => {
        let DelDiv = event.target.parentNode;
        DelDiv.remove();
    },

    showButtonFunction: () => {
       console.log(idBasicDOMLeft.childNodes);
    },


}

export default functions;