class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    override makeSound() : void {
        console.log("Dog says Gau!");
    }
}

class Cat extends Animal {
    override makeSound() : void {
        console.log("Cat says Meow!");
    }
}

const animal: Animal[] = [new Dog(), new Cat()];

animal.forEach((a) => a.makeSound());