import { Account, functions, AccountController } from "./accounts.js"



test("consoleTest", () => {
    console.log("hello from tests");
    functions.helloObjects();
});


function fakeTestAccounts(controller) {
    controller.addNewAccount('cheque', 100);
    controller.addNewAccount('savings', 2000);
    controller.addNewAccount('pet funds', 500);
    controller.addNewAccount('education', 4000);
}

////////////////////////////130A///////////////////////////////

test("Accounts - withdraw, deposit, balance", () => {
    const newAccount = new Account("checkingsAccount", 100);
    // ccheckbalance test (state)
    expect(newAccount.checkBalance()).toEqual(100);
    // withdraw test (-=)
    newAccount.withdraw(75);
    expect(newAccount.checkBalance()).toEqual(25);
    // deposit test (+=)
    newAccount.deposit(75);
    expect(newAccount.checkBalance()).toEqual(100);
});

//////////////////////////130C//////////////////////////
test('Add Account', () => {
    const controller = new AccountController();

    expect(controller.allTotalAccounts.length).toEqual(0);

    controller.addNewAccount('checking', 50);
    expect(controller.allTotalAccounts.length).toEqual(1);

    controller.addNewAccount('saving', 100);
    expect(controller.allTotalAccounts.length).toEqual(2);
});

test('Remove Account', () => {
    const controller = new AccountController();
    fakeTestAccounts(controller);     // creates 4 fake accounts function above to use

    expect(controller.allTotalAccounts[2].accountName).toEqual('pet funds');

    controller.removeAccount(2);
    expect(controller.allTotalAccounts[2].accountName).not.toEqual('pet funds');
});

test('Total Balance', () => {
    const controller = new AccountController();
    fakeTestAccounts(controller);     // creates 4 fake accounts function above to use

    expect(controller.sumTotalBalance()).toEqual(6600);
});

test('Check Highest Value', () => {
    const controller = new AccountController();
    fakeTestAccounts(controller);     // creates 4 fake accounts function above to use

    expect(controller.highestAccount()).toEqual(4000);
});

test('Check Lowest Value', () => {
    const controller = new AccountController();
    fakeTestAccounts(controller);     // creates 4 fake accounts function above to use

    expect(controller.lowestAccount()).toEqual(100);
});


////////////130D////////




