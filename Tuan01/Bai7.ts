class User{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string): void{
        this.name = name;
    }
}

const user = new User("Minh Tuan");
console.log(`Name: ${user.getName()}`);

user.setName("Tuan");
console.log(`Name: ${user.getName()}`);
