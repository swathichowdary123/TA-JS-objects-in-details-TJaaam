class Book {
    constructor(name, author, imageUrl) {
      this.name = name;
      this.author = author;
      this.imageUrl = imageUrl;
      this.read = false; // By default, a new book is marked as not read
    }
  
    markAsRead() {
      this.read = true;
    }
  }
  
  class Bookstore {
    constructor() {
      this.books = [];
    }
  
    addBook(name, author, imageUrl) {
      const newBook = new Book(name, author, imageUrl);
      this.books.push(newBook);
      console.log(`${newBook.name} by ${newBook.author} added to the bookstore.`);
    }
  
    markBookAsRead(bookIndex) {
      if (this.books[bookIndex]) {
        this.books[bookIndex].markAsRead();
        console.log(`${this.books[bookIndex].name} marked as read.`);
      } else {
        console.log("Invalid book index.");
      }
    }
  
    deleteBook(bookIndex) {
      if (this.books[bookIndex]) {
        const deletedBook = this.books.splice(bookIndex, 1)[0];
        console.log(`${deletedBook.name} by ${deletedBook.author} deleted.`);
      } else {
        console.log("Invalid book index.");
      }
    }
  
    displayBooks() {
      console.log("Bookstore Inventory:");
      this.books.forEach((book, index) => {
        const status = book.read ? "Read" : "Not Read";
        console.log(`${index + 1}. ${book.name} by ${book.author} - ${status}`);
      });
    }
  }
  