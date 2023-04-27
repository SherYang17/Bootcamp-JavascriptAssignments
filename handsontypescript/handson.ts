// 1. Define an interface Book with the following properties:
interface Book {
  id: number;
  title: string;
  author: string;
  published: Date;
  available: boolean;
}

// 2. Create an array books with the type Book[] and add a few sample books to the array.
const books: Book[] = [
  {
    id: 1,
    title: "The boy who cried wolf",
    author: "John Boy",
    published: new Date("2012-01-01"),
    available: true,
  },
  {
    id: 2,
    title: "The wolf who cried boy",
    author: "Jake Wolf",
    published: new Date("2012-02-02"),
    available: true,
  },
];


function addBook(book: Book): void { // 3. Define a function addBook(book: Book): void
  books.push(book);                  // 3. that takes a Book object as a parameter and adds it to the books array
}


function findBookById(id: number): Book | undefined { // 4. Define a function findBookById(id: number): Book | undefined
  return books.find((book) => book.id === id);        // 4. that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
}


function updateBook(book: Book): boolean {                 // 5. Define a function updateBook(book: Book): boolean
  const index = books.findIndex((b) => b.id === book.id);  // 5. that takes a Book object as a parameter, 
  if (index !== -1) {    // 5. finds the book with the same id in the books array
    books[index] = book; // 5. and updates its properties
    return true;         // 5. The function should return true if the book was updated successfully
  }
  return false;          // 5. or false if the book was not found.
}


function removeBook(id: number): boolean {                  // 6. Define a function removeBook(id: number): boolean
  const index = books.findIndex((book) => book.id === id);  // 6. that takes a book id as a parameter 
  if (index !== -1) {
    books.splice(index, 1);     // 6. and removes the book with the given id from the books array.
    return true;                // 6. The function should return true if the book was removed successfully 
  }
  return false;                 // 6. or false if the book was not found.

}

// Test the functions
const newBook: Book = {
  id: 3,
  title: "Just a third book",
  author: "Regina George",
  published: new Date("1888-01-02"),
  available: true,
};


const bookToUpdate: Book = {
    id: 1,
    title: "The boy who DIDNT cried wolf",
    author: "John Boy",
    published: new Date("2012-01-01"),
    available: false,
};


// Test your functions by adding, updating, and removing books, and finding books by their id.
console.log(books);
addBook(newBook);
console.log(updateBook(bookToUpdate));
console.log(removeBook(2));
console.log(findBookById(1));
console.log(books);

