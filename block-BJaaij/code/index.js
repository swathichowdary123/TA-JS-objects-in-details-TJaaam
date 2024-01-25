class Book {
    constructor(title, category, author) {
      this.title = title;
      this.category = category;
      this.author = author;
      this.isRead = false;
      this.finishedDate = null;
    }
  
    markBookAsRead() {
      this.isRead = true;
      this.finishedDate = Date.now();
    }
  }
  
  class BookList {
    constructor() {
      this.books = [];
      this.currentIndex = 0;
    }
  
    add(books) {
      this.books.push(...books);
    }
  
    getCurrentBook() {
      return this.books[this.currentIndex];
    }
  
    getNextBook() {
      this.currentIndex = (this.currentIndex + 1) % this.books.length;
      return this.getCurrentBook();
    }
  
    getPrevBook() {
      this.currentIndex = (this.currentIndex - 1 + this.books.length) % this.books.length;
      return this.getCurrentBook();
    }
  
    changeCurrentBook(index) {
      if (index >= 0 && index < this.books.length) {
        this.currentIndex = index;
      } else {
        console.error("Invalid index");
      }
    }
  }
  
  // Create Book objects
  const book1 = new Book("Title 1", "Category 1", "Author 1");
  const book2 = new Book("Title 2", "Category 1", "Author 2");
  const book3 = new Book("Title 3", "Category 2", "Author 3");
  const book4 = new Book("Title 4", "Category 2", "Author 4");
  const book5 = new Book("Title 5", "Category 3", "Author 5");
  
  // Create BookList object
  const bookList = new BookList();
  
  // Add books to the list
  bookList.add([book1, book2, book3, book4, book5]);
  
  // Test methods
  console.log("Current Book:", bookList.getCurrentBook());
  console.log("Next Book:", bookList.getNextBook());
  console.log("Previous Book:", bookList.getPrevBook());
  
  // Mark a book as read
  bookList.getCurrentBook().markBookAsRead();
  console.log("Marked as Read:", bookList.getCurrentBook());
  
  // Change current book
  bookList.changeCurrentBook(2);
  console.log("Changed Current Book:", bookList.getCurrentBook());