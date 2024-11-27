import { Books } from "./books";

// 1. Print books titles with a rating higher than 4.5
const highRatedBooks = () => {
  Books.filter(book => book.rating > 4.5).map(book => console.log(book.title));
};

/* 2. A function that iterates over an array of books and prints their details
(title, author, rating, genre). Use destructuring to extract these values.*/
const printBookDetails = () => {
  Books.map(({ title, author, rating, genre }) => {
    console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
  });
};

// 3. A function that prints book titles with the genre “fiction”.
const fictionBooks = () => {
  Books.filter(book => book.genre === "Fiction").map(book => console.log(book.title));
};

// 4. Display an array of book authors
const listAuthors = () => {
  const authors = Books.map(book => book.author);
  console.log(authors);
};

// Call functions to verify output
console.log("Books with rating higher than 4.5:");
highRatedBooks();

console.log("\nBook details:");
printBookDetails();

console.log("\nBooks in Fiction genre:");
fictionBooks();

console.log("\nList of authors:");
listAuthors();