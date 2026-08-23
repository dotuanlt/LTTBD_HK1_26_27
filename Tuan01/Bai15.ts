class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
        this.users.push(user);
    }
}

const library = new Library();

library.addBook(new Book("De Men Phieu Luu Ky"));
library.addBook(new Book("Thanh Giong"));

library.addUser(new User("Tuan"));
library.addUser(new User("Minh"));

console.log(library.books);
console.log(library.users);