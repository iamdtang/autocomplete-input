import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GithubRepoExampleController extends Controller {
  @tracked repo;
  @tracked repos = [];

  @action
  setRepo(repo) {
    this.repo = repo;
  }

  @action
  async searchRepos(search) {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search}`
    );

    const json = await response.json();

    this.repos = json.items.mapBy('full_name');
  }
}
