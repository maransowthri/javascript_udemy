class Github {
  constructor() {
    this.client_id = "f31e5893b8e8b20dd672";
    this.client_secret = "025df480a2c6f54ccd2325e54479b14f7d350274";
    this.repos_limit = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}/`
    );
    const profileData = await profileResponse.json();

    const profileReposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_limit}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}/`
    );
    const profileReposData = await profileReposResponse.json();

    return {
      profileData,
      profileReposData,
    };
  }
}
