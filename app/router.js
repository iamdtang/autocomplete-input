import EmberRouter from '@ember/routing/router';
import config from 'autocomplete-input/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dad-joke-example');
  this.route('github-repo-example', { path: '/' });
});
