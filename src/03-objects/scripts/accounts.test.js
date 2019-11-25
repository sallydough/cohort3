import { Account, functions } from "./accounts.js"



test("consoleTest", () => {
    console.log("hello from tests");
    functions.helloObjects();
});

////////////////////////////130A///////////////////////////////

test( "Accounts - withdraw, deposit, balance", () => {
    const newAccount = new Account ("checkingsAccount", 100);
    // balance test (state)
    expect(newAccount.checkBalance()).toEqual(100);
    // withdraw test (-=)
    newAccount.withdraw(75);
    expect(newAccount.checkBalance()).toEqual(25);
    // deposit test (+=)
    newAccount.deposit(75);
    expect(newAccount.checkBalance()).toEqual(100);
});

//////////////////////////130C//////////////////////////