import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DadJokeExampleController extends Controller {
  @tracked dadJoke;
  @tracked dadJokes = [];

  @action
  setDadJoke(dadJoke) {
    this.dadJoke = dadJoke;
  }

  @action
  async searchDadJokes(search) {
    const response = await fetch(
      `https://icanhazdadjoke.com/search?term=${search}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    const json = await response.json();

    this.dadJokes = json.results.mapBy('joke');
  }
}
