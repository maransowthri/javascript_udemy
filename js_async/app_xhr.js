const getDataBtn = document.getElementById("get-data-btn");

getDataBtn.addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  //   console.log(xhr);

  xhr.open("GET", "data_xhr.txt", true);

  xhr.onprogress = function () {
    console.log("In Progress", this.readyState); // 3 means request is in progress
  };

  xhr.onerror = function () {
    console.log("Error", this.readyState);
  };

  xhr.onload = function () {
    console.log("Request finished", this.readyState); // 4 means request finished
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    } else {
      console.log(`Status Code: ${this.status}`);
    }
  };

  xhr.send();
}
