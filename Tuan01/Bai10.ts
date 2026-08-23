class Account1 {
    public username: string;
    private password: string;
    readonly accountId: number;

    constructor(
        username: string,
        password: string,
        accountId: number
    ) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }
}

const account1 = new Account1(
    "tuan",
    "123456",
    1001
);

console.log(account1.username);
console.log(account1.accountId);