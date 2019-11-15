import functions from './functions.js'

idButton.addEventListener("click", () => {
    let ultimateParentDiv = document.getElementById("idParent");
    let newAddedFull = functions.createCard(ultimateParentDiv); 
});