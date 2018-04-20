import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    if (isEmpty(serialized)) {
      return A([]);
    } else {
      return A(serialized);
    }
  },

  serialize(deserialized) {
    if (isEmpty(deserialized)) {
      return A([]);
    } else {
      return A(deserialized);
    }
  }
});
