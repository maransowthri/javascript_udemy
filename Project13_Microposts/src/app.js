import { http } from "./http";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);
document.querySelector(".post-submit").addEventListener("click", submitPost);
document.querySelector("#posts").addEventListener("click", removePost);
document.querySelector("#posts").addEventListener("click", updatePopulate);
document.querySelector(".card-form").addEventListener("click", cancelEdit);

function getPosts() {
  http
    .get("http://localhost:3000/posts/")
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

function submitPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const id = document.getElementById("id").value;
  const data = {
    title,
    body,
  };

  if (title && body) {
    if (id) {
      http.put(`http://localhost:3000/posts/${id}`, data).then((data) => {
        getPosts();
        ui.showAlert("success", "Post has been updated successfully!");
        ui.changeFormState("add");
      });
    } else {
      http
        .post("http://localhost:3000/posts/", data)
        .then((data) => {
          getPosts();
          ui.showAlert("success", "Post has been added successfully!");
          ui.clearInputs();
        })
        .catch((err) => console.log(err));
    }
  } else {
    ui.showAlert("danger", "Unexpected input found");
  }
}

function removePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    console.log(`http://localhost:3000/posts/${id}`);
    http
      .delete(`http://localhost:3000/posts/${id}`)
      .then((data) => {
        ui.showAlert("success", "Post has been removed successfully!");
        getPosts();
      })
      .catch((err) => console.log(err));
  }
}

function updatePopulate(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const data = { id, title, body };
    ui.fillForm(data);
  }
}

function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }
  e.preventDefault();
}
