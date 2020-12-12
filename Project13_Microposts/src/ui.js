class UI {
  constructor() {
    this.postsEl = document.getElementById("posts");
    this.postTitleInput = document.getElementById("title");
    this.postBodyInput = document.getElementById("body");
    this.postIdInput = document.getElementById("id");
    this.postSubmitBtn = document.querySelector(".post-submit");
    this.postsContainerEl = document.querySelector(".postsContainer");
    this.postsForm = document.querySelector(".card-form");
    this.formState = "add";
  }

  showPosts(posts) {
    let output = "";
    for (let post of posts) {
      output += `
            <div class='card mb-3'>
                <div class='card-body'>
                    <h4 class='card-title'>${post.title}</h4>
                    <p class='card-text'>${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                        <i class="fa fa-pencil-alt"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id="${post.id}">
                        <i class="fa fa-trash"></i>
                    </a>
                </div>
            </div>
          `;
    }
    this.postsEl.innerHTML = output;
  }

  showAlert(type, message) {
    const divEl = document.createElement("div");
    divEl.className = `alert alert-${type}`;
    divEl.appendChild(document.createTextNode(message));
    this.postsContainerEl.insertBefore(divEl, this.postsForm);
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearInputs() {
    this.postTitleInput.value = "";
    this.postBodyInput.value = "";
  }

  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      document.querySelector(".alert").remove();
    }
  }

  fillForm(data) {
    this.postIdInput.value = data.id;
    this.postTitleInput.value = data.title;
    this.postBodyInput.value = data.body;

    this.changeFormState("edit");
  }

  clearIDInput() {
    document.querySelector("#id").value = "";
  }

  changeFormState(state) {
    if (state === "edit") {
      this.postSubmitBtn.textContent = "Update";
      this.postSubmitBtn.className = "post-submit btn btn-warning btn-block";

      const cancelButton = document.createElement("button");
      cancelButton.className = "post-cancel btn btn-light btn-block";
      cancelButton.appendChild(document.createTextNode("Cancel"));
      const cardForm = document.querySelector(".card-form");
      cardForm.appendChild(cancelButton);
    } else {
      this.postSubmitBtn.textContent = "Submit";
      this.postSubmitBtn.className = "post-submit btn btn-primary btn-block";
      const cancelButton = document.querySelector(".post-cancel");
      if (cancelButton) {
        cancelButton.remove();
      }
      this.clearInputs();
      this.clearIDInput();
    }
  }
}

export const ui = new UI();
