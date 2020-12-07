const getTextBtn = document.getElementById("get-text");
const getJSONBtn = document.getElementById("get-json");
const getExternalBtn = document.getElementById("get-external");
const outputEl = document.getElementById("output");

getTextBtn.addEventListener("click", () => {
  fetch("data.txt")
    .then(handleError)
    .then((res) => {
      if (res.ok) {
        return res.text();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      outputEl.innerHTML = data;
    })
    .catch((err) => {
      outputEl.innerHTML = err;
    });
});

getJSONBtn.addEventListener("click", () => {
  fetch("data.json")
    .then(handleError)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const ulEl = document.createElement("ul");
      for (let person of data) {
        const liEl = document.createElement("li");
        liEl.appendChild(
          document.createTextNode(`Name: ${person.name}, Age: ${person.age}`)
        );
        ulEl.appendChild(liEl);
      }
      outputEl.appendChild(ulEl);
    })
    .catch((error) => {
      outputEl.innerHTML = error;
    });
});

getExternalBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(handleError)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const ulEl = document.createElement("ul");
      for (let person of data) {
        const liEl = document.createElement("li");
        liEl.appendChild(
          document.createTextNode(`ID: ${person.id}, Name: ${person.name}`)
        );
        ulEl.appendChild(liEl);
      }
      outputEl.appendChild(ulEl);
    })
    .catch((error) => {
      outputEl.innerHTML = error;
    });
});

function handleError(res) {
  if (res.ok) {
    return res;
  } else {
    throw new Error("Something went wrong!");
  }
}
