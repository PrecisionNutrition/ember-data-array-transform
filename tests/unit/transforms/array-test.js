import { typeOf } from '@ember/utils';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | array', function(hooks) {
  setupTest(hooks);

  test('#deserialize', function(assert) {
    let transform = this.owner.lookup('transform:array');

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
    let transform = this.owner.lookup('transform:array');

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
});