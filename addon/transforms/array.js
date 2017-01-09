import Ember from 'ember';
import Transform from 'ember-data/transform';

const {
  isEmpty,
  A,
} = Ember;

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
