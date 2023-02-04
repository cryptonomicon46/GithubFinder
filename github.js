class Github {
  constructor() {
    this.client_id = "4f50bea9e31e45ec69e1";
    this.client_secret = "fd3ca3f2c461e85e303df9559a18004f2012eefe";
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos };
  }
}
