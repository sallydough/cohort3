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
    // 'delete from Account List' button:
    if (event.target.name == "deleteBut") {
        functions.deleteBut(event.target, counter);
    }
});

//deposit:
// -take input value
//-cycle through array in object, find balance, update >>
// -add it to current array balance
//-return new balance
//-update current balance to new balance

//withdraw:
// -take input value
//-cycle through array in object, find balance, update >>
// -subtract it to current array balance
//-return new balance
//-update current balance to new balance


