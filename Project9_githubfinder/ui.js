class UI {
  constructor() {
    this.profileEl = document.getElementById("profile");
    this.searchContainer = document.querySelector(".search-container");
    this.searchCard = document.querySelector(".search");
  }

  showProfile(user) {
    this.profileEl.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
            </div>
            </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
            `;
  }

  showProfileRepos(repos) {
    let output = "";
    for (let repo of repos) {
      output += `
              <div class='card card-body mb-2'>
                <div class='row'>
                  <div class='col-md-6'>
                    <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                  </div>
                  <div class='col-md-6'>
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                  </div>
                </div>
              </div>
      `;

      document.getElementById("repos").innerHTML = output;
    }
  }

  showAlert(message, type) {
    this.clearAlert();
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.appendChild(document.createTextNode(message));
    this.searchContainer.insertBefore(alertDiv, this.searchCard);
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  clearProfile() {
    this.profileEl.innerHTML = "";
  }
}
