import Component from '@glimmer/component';
import { restartableTask, timeout } from 'ember-concurrency';
import { guidFor } from '@ember/object/internals';

export default class AutocompleteInputComponent extends Component {
  listId = guidFor(this);

  wasOptionSelected(value) {
    return this.args.options.includes(value);
  }

  @restartableTask
  *onInputTask(event) {
    const { value } = event.target;

    this.args.onInput(value);

    if (this.wasOptionSelected(value)) {
      return;
    }

    const debounce = 250;
    yield timeout(debounce);

    if (value) {
      this.args.search(value);
    }
  }
}
