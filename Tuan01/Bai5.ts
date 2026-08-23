class BankAccount {
    balance: number;

    constructor(balance: number = 0){
        this.balance = balance;
    }

    deposit(amount: number): void{
        if(amount <= 0){
            console.log("Invalid amount.");
            return;
        }

        this.balance += amount;
    }

    withdraw(amount: number): void{
        if(amount <= 0){
            console.log("Invalid amount.");
            return;
        }

        if(amount > this.balance){
            console.log("IInsufficient balance.");
            return;
        }

        this.balance -= amount;
    }
}

const account = new BankAccount(100000);
account.deposit(10000)
account.withdraw(2000)

console.log(`Blance: ${account.balance}`);
