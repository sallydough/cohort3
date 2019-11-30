import { Account, AccountController, functions } from "./accounts.js"




// Add New Account:
const idAddAcount = document.getElementById("idAddAcount");
let counter = 0;

idAddAcount.addEventListener("click", () => {
    // -create a card account: displays name, total balance, delete account button
    counter++;
    const accountList = document.getElementById("idAccountList");
    let newAddedAccount = functions.createdAccount(accountList, counter);
    idAccountList.appendChild(newAddedAccount);
});

// Console log event target
const idBody = document.getElementById("idBody");

idBody.addEventListener("click", () => {
    console.log(event.target);
    if (event.target.name == "deleteBut") {
        functions.deleteBut(event.target, counter);
    }
});

//Delete Selected Account:
