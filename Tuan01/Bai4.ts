class Rectangle{
    weight: number;
    height: number;

    constructor(weight: number, height: number){
        this.weight = weight;
        this.height = height;
    }

    area(): number{
        return this.weight * this.height;
    }

    perimeter(): number{
        return 2* (this.weight + this.height);
    }
}


const rectangle = new Rectangle(20, 10);

console.log(`Area: ${rectangle.area()}`);
console.log(`Perimeter: ${rectangle.perimeter()}`);

