function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {
  this.titleEl = document.getElementById("book-title");
  this.authorEl = document.getElementById("book-author");
  this.isbnEl = document.getElementById("book-isbn");
  this.container = document.querySelector(".container");
  this.bookForm = document.querySelector("#book-form");
}

UI.prototype.addNewBookToList = function () {
  if (
    this.titleEl.value === "" ||
    this.authorEl.value === "" ||
    this.isbnEl.value === ""
  ) {
    this.showMessage("Invalid input found", "error");
    return;
  }
  const book = new Book(
    this.titleEl.value,
    this.authorEl.value,
    this.isbnEl.value
  );
  const bookTableEl = document.getElementById("book-list");
  const row = document.createElement("tr");
  const titleTd = document.createElement("td");
  titleTd.appendChild(document.createTextNode(book.title));
  const authorTd = document.createElement("td");
  authorTd.appendChild(document.createTextNode(book.author));
  const isbnTd = document.createElement("td");
  isbnTd.appendChild(document.createTextNode(book.isbn));
  const deleteTd = document.createElement("td");
  deleteTd.innerHTML = "<a href='#' class='delete'>X</a>";
  row.appendChild(titleTd);
  row.appendChild(authorTd);
  row.appendChild(isbnTd);
  row.appendChild(deleteTd);

  bookTableEl.appendChild(row);
  this.showMessage("Book Added!", "success");
  this.clearFields();
};

UI.prototype.clearFields = function () {
  this.titleEl.value = "";
  this.authorEl.value = "";
  this.isbnEl.value = "";
};

UI.prototype.showMessage = function (message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert ${type}`;
  alertDiv.appendChild(document.createTextNode(message));

  this.container.insertBefore(alertDiv, this.bookForm);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    this.showMessage("Book Removed!", "success");
  }
};

const bookFormEl = document.getElementById("book-form");
const bookListEl = document.getElementById("book-list");
const ui = new UI();

bookFormEl.addEventListener("submit", function (e) {
  ui.addNewBookToList();
  e.preventDefault();
});

bookListEl.addEventListener("click", function (e) {
  ui.deleteBook(e.target);
  e.preventDefault();
});
