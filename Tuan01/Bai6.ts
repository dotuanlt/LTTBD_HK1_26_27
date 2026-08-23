class Book{
    title: string;
    authour: string;
    year: number;

    constructor(title: string, authour: string, year: number){
        this.title = title;
        this.authour = authour;
        this.year = year;
    }
}

const book = new Book("Truyen Kieu", "Nguyen Du", 1990);

console.log(`Book: ${book}`);

