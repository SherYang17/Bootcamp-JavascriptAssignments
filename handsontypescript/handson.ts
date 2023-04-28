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
    title: "Uncovering UFOs and Bigfoot at SET's Headquarters",
    author: "Hector Gonzalez",
    published: new Date("2023-01-01"),
    available: true,
  },
  {
    id: 2,
    title: "The Secret Files of SET: Unearthing Hidden Truths about UFOs, Bigfoot, and Ancient Mysteries",
    author: "Simone Mayers",
    published: new Date("2023-02-02"),
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
  const moreBooks = books.findIndex((b) => b.id === book.id);  // 5. that takes a Book object as a parameter, 
  if (moreBooks >= 0) {      // 5. finds the book with the same id in the books array and updates its properties, greater than 0 books
    books[moreBooks] = book; // 5. finds the book with the same id in the books array and updates its properties
    return true;         // 5. The function should return true if the book was updated successfully
  }
  return false;          // 5. or false if the book was not found.
}


function removeBook(id: number): boolean {                  // 6. Define a function removeBook(id: number): boolean
  const moreBooks = books.findIndex((book) => book.id === id);  // 6. that takes a book id as a parameter 
  if (moreBooks >= 0) {         // 6. and removes the book with the given id from the books array, greater than 0 books
    books.splice(moreBooks, 1); // 6. and removes the book with the given id from the books array.
    return true;                // 6. The function should return true if the book was removed successfully 
  }
  return false;                 // 6. or false if the book was not found.

}

// Test the functions, adding a bunch of new books
const newBook: Book = {
  id: 3,
  title: "Real UFO's In CTAC's Backyard!",
  author: "Erin Woodard",
  published: new Date("2023-03-02"),
  available: true,
};

const newBookTwo: Book = {
  id: 4,
  title: "From Whistleblower to Target: My Journey Exposing Company SET's Involvement With Coffee Conspiracies On Lightly Roasted Coffee",
  author: "Kevin Hoang",
  published: new Date("2023-04-02"),
  available: true,
};

const newBookThree: Book = {
  id: 5,
  title: "Zombie Outbreak Unveiled: SET's Dark Secrets Revealed",
  author: "Brandon Wall",
  published: new Date("2023-05-02"),
  available: true,
};


const bookToUpdate: Book = {
  id: 4,
  title: "From Whistleblower to Target: My Journey Exposing Company SET's Involvement With Zombies",
  author: "Anonymous",
  published: new Date("2023-04-02"),
  available: true,
};


// Test your functions by adding, updating, and removing books, and finding books by their id.
console.log(books);
addBook(newBook);     // adding
addBook(newBookTwo);  // adding
addBook(newBookThree);// adding
console.log(books);
console.log(updateBook(bookToUpdate)); // updating
console.log(removeBook(2));            // removing books 
console.log(findBookById(1));          // finding books by their id
console.log(books);

//refer to onenote for all the notes on how to npm and tsc