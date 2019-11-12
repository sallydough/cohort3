const functions = {

    helloDOMWorld: () => {
        console.log("hello DOM world from functions.js");
    },

    showButtonFunction: () => {
        // return 0;
        console.log(idBasicDOMLeft.children);
    },

    counter: 0,

    createCard: (parentDiv) => {
        functions.counter++;
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<p> Card Number ${functions.counter} </p>
        <button id="idAddBefore">Add Before</button>
            <button id="idAddAfter">Add After</button>
            <button id="idDelete">Delete</button>`;
        newDiv.setAttribute("count", functions.counter);
        newDiv.setAttribute("class", "cardFullArea");
        return newDiv;
    },




}

export default functions;