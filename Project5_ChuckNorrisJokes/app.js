const getJokesBtn = document.getElementById("get-jokes");
const countEl = document.getElementById("count");
const jokesListEl = document.getElementById("jokes-list");
const jokesFormEl = document.getElementById("jokes-form");
const containerEl = document.querySelector(".container");

jokesFormEl.addEventListener("submit", getJokes);

function getJokes(e) {
  e.preventDefault();
  if (countEl.value === "" || parseInt(countEl.value) < 1) {
    showMessage("Invalid input found", "error");
    return;
  }

  const jokesCount = parseInt(countEl.value);
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${jokesCount}`);
  xhr.onprogress = function () {
    showMessage("Loading...", "success");
  };

  xhr.onerror = function () {
    showMessage("Something went wrong!", "error");
  };

  xhr.onload = function () {
    if (this.status === 200) {
      const jokes = JSON.parse(this.responseText).value;
      const responseType = JSON.parse(this.responseText).type;
      if (responseType === "success") {
        for (let joke of jokes) {
          console.log(joke);
          const jokeLi = document.createElement("li");
          jokeLi.appendChild(document.createTextNode(joke.joke));
          jokesListEl.appendChild(jokeLi);
        }
      } else {
        showMessage(`Something went wrong! Response Type ${responseType}`);
      }
    } else {
      showMessage(`Something went wrong! Status Code ${this.status}`);
    }
  };

  xhr.send();
}

function showMessage(message, type) {
  const errorDiv = document.createElement("div");
  errorDiv.className = `alert ${type}`;
  errorDiv.appendChild(document.createTextNode(message));

  containerEl.insertBefore(errorDiv, jokesFormEl);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
