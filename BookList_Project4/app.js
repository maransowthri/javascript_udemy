// localStorage.clear();
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {
    this.titleEl = document.getElementById("book-title");
    this.authorEl = document.getElementById("book-author");
    this.isbnEl = document.getElementById("book-isbn");
    this.container = document.querySelector(".container");
    this.bookForm = document.querySelector("#book-form");
  }

  addNewBookToList() {
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
    store.addBook(book);
    this.showMessage("Book Added!", "success");
    this.clearFields();
  }

  clearFields() {
    this.titleEl.value = "";
    this.authorEl.value = "";
    this.isbnEl.value = "";
  }

  showMessage(message, type) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert ${type}`;
    alertDiv.appendChild(document.createTextNode(message));

    this.container.insertBefore(alertDiv, this.bookForm);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.classList.contains("delete")) {
      target.parentElement.parentElement.remove();
      this.showMessage("Book Removed!", "success");
      store.removeBook(target.parentElement.previousElementSibling.textContent);
    }
  }
}

class Store {
  constructor() {
    this.books = localStorage.getItem("books");
    if (!this.books) {
      this.books = [];
    } else {
      this.books = JSON.parse(this.books);
    }
  }

  displayBooks() {
    for (let book of this.books) {
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
    }
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}

const bookFormEl = document.getElementById("book-form");
const bookListEl = document.getElementById("book-list");
const ui = new UI();
const store = new Store();

bookFormEl.addEventListener("submit", function (e) {
  ui.addNewBookToList();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  store.displayBooks();
});

bookListEl.addEventListener("click", function (e) {
  ui.deleteBook(e.target);
  e.preventDefault();
});
