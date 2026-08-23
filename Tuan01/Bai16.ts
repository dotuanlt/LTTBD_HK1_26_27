class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(50);
console.log(numberBox.getValue()); 

const stringBox = new Box<string>("Hello World!");
console.log(stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log(booleanBox.getValue());

interface Person {
    name: string;
    age: number;
}
const personBox = new Box<Person>({ name: "Tuan", age: 22 });
console.log(personBox.getValue());