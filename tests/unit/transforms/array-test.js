import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const {
  typeOf,
} = Ember;

moduleFor('transform:array', 'Unit | Transform | array', {
});

test('#deserialize', function(assert) {
  let transform = this.subject();

  let ret;

  ret = transform.deserialize();

  assert.equal(
    typeOf(ret),
    'array'
  );

  let arg = ['foo', 'bar'];

  ret = transform.deserialize(arg);

  assert.deepEqual(
    ret,
    arg,
    'returns the argument'
  );
});

test('#serialize', function(assert) {
  let transform = this.subject();

  let ret;

  ret = transform.serialize();

  assert.equal(
    typeOf(ret),
    'array'
  );

  let arg = ['foo', 'bar'];

  ret = transform.serialize(arg);

  assert.deepEqual(
    ret,
    arg,
    'returns the argument'
  );
});
