console.log("Library loaded");
const myLibrary = [];
const form = document.querySelector(".book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readCheckbox = document.querySelector("#read");
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    Number(pagesInput.value),
    readCheckbox.checked,
  );

  myLibrary.push(newBook);

  console.log(myLibrary);
});
