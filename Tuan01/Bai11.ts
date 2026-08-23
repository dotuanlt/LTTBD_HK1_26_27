class Animal {
    bark(): void {
        console.log("Animal makes a sound");
    }

    meow(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Dog barks: Gau!");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("Cat meows: Meo!");
    }
}

const dogNew = new Dog();
dogNew.bark();

const cat = new Cat();
cat.meow();