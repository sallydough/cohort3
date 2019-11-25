

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

export { Account, functions };