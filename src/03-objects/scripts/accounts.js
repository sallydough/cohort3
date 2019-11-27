

const functions = {

    helloObjects: () => {
        console.log("hello from functions.js");
    }
}

class Account {
    constructor(accountName, startingBalance) {
        this.accountName = accountName;
        this.balance = startingBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    checkBalance() {
        return this.balance;
    }
    // method2() { ... }
}

class AccountController {
    constructor() {
        this.allTotalAccounts = [];
    }
    addNewAcccount(accountName, startingBalance) {
        const newSubAccount = new Account(accountName, startingBalance)
        this.allTotalAccounts.push(newSubAccount);
    }
    removeAccount(selectedAccountInArray) {
        this.allTotalAccounts.splice(selectedAccountInArray, 1);
     }
    sumTotalBalance() {
        let sumTotalBal = 0;
        for (const eachAccount of this.allTotalAccounts) {
            sumTotalBal += eachAccount.balance;
        }
        return sumTotalBal;
     }
    highestAccount() { 
        const balanceArr = this.allTotalAccounts.map(each => each.balance);
        const highestAcc = Math.max(...balanceArr);
        return highestAcc;
    }
    lowestAccount() {const balanceArr = this.allTotalAccounts.map(each => each.balance);
        const lowestAcc = Math.min(...balanceArr);
        return lowestAcc; 
    }

}

export { Account, AccountController, functions };