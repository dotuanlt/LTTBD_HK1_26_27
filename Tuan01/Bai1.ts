class Person {
    name: string;
    age: number;
     
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    display(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

class Student extends Person{
    grade: number;

    constructor(name: string, age: number, grade: number){
        super(name, age);
        this.grade = grade;
    }

    displayStudentInfo(): void{
        this.display();
        console.log(`Grade: ${this.grade}`);
    }
}

const person = new Person("Tuan", 22);
person.display();

const student = new Student("Tuan" , 22, 12);
student.displayStudentInfo();