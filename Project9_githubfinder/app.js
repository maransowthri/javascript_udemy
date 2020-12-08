const searchInputEl = document.getElementById("search-user");
const http = new Github();
const ui = new UI();

searchInputEl.addEventListener("keyup", (e) => {
  let searchInput = e.target.value;
  if (searchInput) {
    http.getUser(searchInput).then((data) => {
      if (data.profileData.message === "Not Found") {
        ui.showAlert("No users found", "danger");
      } else {
        ui.showProfile(data.profileData);
        ui.showProfileRepos(data.profileReposData);
      }
    });
  } else {
    ui.clearProfile();
  }
});
