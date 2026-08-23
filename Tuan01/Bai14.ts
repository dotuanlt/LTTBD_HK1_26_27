class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    work(): void {
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} is managing the team`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`${this.name} is writing code`);
    }
}

const manager = new Manager("Tuan", 2004);
manager.work();
manager.manage();

const developer = new Developer("Toan", 2005);
developer.work();
developer.code();