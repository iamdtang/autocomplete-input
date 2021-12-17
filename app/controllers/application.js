import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked options = [];

  @action
  async searchDadJokes(search) {
    const response = await fetch(
      `https://icanhazdadjoke.com/search?term=${search}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    const json = await response.json();

    this.options = json.results.mapBy('joke');
  }

  @action
  async searchRepos(search) {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search}`
    );

    const json = await response.json();

    this.options = json.items.mapBy('full_name');
  }
}