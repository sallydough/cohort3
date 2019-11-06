const functions = {

    helloWorldDom: () => {
        console.log("hello worldddddd");
    },

    counter: 0,

    createCard: (parentDiv) => {
        functions.counter++;
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.setAttribute("count", functions.counter);
        newDiv.textContent = `Card Number ${functions.counter}`;
        return newDiv;
    },

    addCard: (parentDiv) => {
        let newChildCard = functions.createCard(parentDiv);
        parentDiv.appendChild(newChildCard);
      
        return;
    },






};

export default functions;