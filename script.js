console.log("Library loaded");
const myLibrary = [];
const form = document.querySelector(".book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readCheckbox = document.querySelector("#read");
const container = document.querySelector(".library-container");
function Book(title, author, pages, read) {
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
  displayLibrary();
  form.reset();
  console.log(myLibrary);
});

function displayLibrary() {
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const card = `<div class="card">
    <h2>${book.title}</h2>  
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.read ? "Yes" : "No"}</p>
  </div>

  
     <button class="toggle-btn" data-index="${index}">
      Toggle Read
    </button>
  <button class="delete-btn" data-index="${index}">Delete</button>`;
    container.innerHTML += card;
  });

  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = Number(e.target.dataset.index);
      myLibrary[index].read = !myLibrary[index].read;
      displayLibrary();
    });
  });
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = Number(e.target.dataset.index);
      myLibrary.splice(index, 1);
      displayLibrary();
    });
  });
}
