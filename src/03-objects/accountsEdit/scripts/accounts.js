

const functions = {

    helloObjects: () => {
        console.log("hello from functions.js");
    },

    showButtonFunction: (parentdiv) => {
        console.log(idAccountList.childNodes);
     },

    counter: 0,

    // create New Acount:
    createdAccount: (parent, account) => {

        // createAccountDiv: (parent, account) => {
            let accountNameNoSpace = String(account.accountName).replace(/\s/g, "-");
            const newAccount = document.createElement("div");
            newAccount.id = `id-${account.accountName}`.toLowerCase();
            newAccount.setAttribute("class", "account-card");
            newAccount.setAttribute("counter", account.key);
            parent.appendChild(newAccount);
            const newSpanName = document.createElement("span");
            newSpanName.setAttribute("class", "account-name");
            newSpanName.textContent = account.accountName;
            newAccount.appendChild(newSpanName);
            const newSpanBalance = document.createElement("span");
            newSpanBalance.setAttribute("class", "account-balance");
            newSpanBalance.textContent = "$" + Number(account.startingBalance).toFixed(2);
            newAccount.appendChild(newSpanBalance);
            const newInput = document.createElement("input");
            newInput.type = "number";
            newInput.id = `id-${accountNameNoSpace}-input`.toLowerCase();
            newInput.setAttribute("class", "account-input");
            newAccount.appendChild(newInput);
            const newDepositButton = document.createElement("button");
            newDepositButton.textContent = "Deposit";
            newDepositButton.id = `id-${accountNameNoSpace}-deposit-button`.toLowerCase();
            newDepositButton.setAttribute("class", "deposit-button account-button");
            newAccount.appendChild(newDepositButton);
            const newWithdrawButton = document.createElement("button");
            newWithdrawButton.textContent = "Withdraw";
            newWithdrawButton.id = `id-${accountNameNoSpace}-withdraw-button`.toLowerCase();
            newWithdrawButton.setAttribute("class", "withdraw-button account-button");
            newAccount.appendChild(newWithdrawButton);
            const newDeleteButton = document.createElement("button");
            newDeleteButton.textContent = "Delete Account";
            newDeleteButton.id = `id-${accountNameNoSpace}-delete-button`.toLowerCase();
            newDeleteButton.setAttribute("class", "delete-button account-button");
            newAccount.appendChild(newDeleteButton);

        // functions.counter++;
        // let newAccount = document.createElement("div");
        // const accountIdType = document.getElementById("idAccountType").value;
        // const accountIdStartBal = document.getElementById("idStartDeposit").value;
        // newAccount.textContent = `${accountIdType.toUpperCase()} :  $${accountIdStartBal}`
        // newAccount.id = `idAccountNumber${functions.counter}`
        // newAccount.setAttribute("class", "newAccount");
        // let deleteAccount = document.createElement("button");
        // deleteAccount.id = `deleteAccount`;
        // deleteAccount.textContent = `X`
        // deleteAccount.setAttribute("name", "deleteBut");
        // newAccount.appendChild(deleteAccount);
        // accountList.appendChild(newAccount);
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
    constructor(key, accountName, startingBalance) {
        this.key = Number(key);
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