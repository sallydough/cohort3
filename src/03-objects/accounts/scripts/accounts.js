

const functions = {

    helloObjects: () => {
        console.log("hello from functions.js");
    },

    showButtonFunction: (parentdiv) => {
        console.log(idAccountList.childNodes);
     },

    counter: 0,

    // create New Acount:
    createdAccount: (accountList) => {
        functions.counter++;
        let newAccount = document.createElement("div");
        const accountIdType = document.getElementById("idAccountType").value;
        const accountIdStartBal = document.getElementById("idStartDeposit").value;
        newAccount.textContent = `${accountIdType.toUpperCase()} :  $${accountIdStartBal}`
        newAccount.id = `idAccountNumber${functions.counter}`
        newAccount.setAttribute("class", "newAccount");
        let deleteAccount = document.createElement("button");
        deleteAccount.id = `deleteAccount`;
        deleteAccount.textContent = `X`
        deleteAccount.setAttribute("name", "deleteBut");
        newAccount.appendChild(deleteAccount);
        accountList.appendChild(newAccount);
        // const accountIdName = document.getElementById("input");
        // accountTypedName = document.getElementById
        // accountIdName.id = `${accountIdName}`
        // newAccount.appendChild(accountIdName);
        // newAccount.appendChild(accountIdType.value);
        // newAccount.appendChild(accountIdStartBal.value);
        return newAccount;
    },

    deleteBut: (target) => {
        let DelAcc = target.parentNode;
        DelAcc.remove();
    },
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
    addNewAccount(accountName, startingBalance) {
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
    lowestAccount() {
        const balanceArr = this.allTotalAccounts.map(each => each.balance);
        const lowestAcc = Math.min(...balanceArr);
        return lowestAcc;
    }

}

export { Account, AccountController, functions };