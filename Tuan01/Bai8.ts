class Product{
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    
}

const products: Product[] = [
    new Product("Laptop", 2000),
    new Product("Phone", 500),
    new Product("TV", 5000)
];

const result = products.filter(product => product.price > 100);

console.log(result);


