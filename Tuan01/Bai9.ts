interface Animal{
    name: string;
    sound(): void;
}

const dog: Animal = {
    name: "Buddy",

    sound(): void{
        console.log("Gau");
    }
};

dog.sound();