import Component from '@glimmer/component';
import { restartableTask, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

export default class AutosuggestInputComponent extends Component {
  @tracked value = '';

  listId = guidFor(this);

  @restartableTask
  *searchTask(event) {
    if (!(event instanceof InputEvent)) {
      return;
    }

    this.value = event.target.value;

    const debounce = 250;
    yield timeout(debounce);

    if (this.value) {
      this.args.search(this.value);
    }
  }
}
