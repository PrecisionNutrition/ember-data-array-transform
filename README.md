# ember-data-array-transform [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-data-array-transform.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-data-array-transform)
==============================================================================

Converts attributes that are Arrays into JavaScript arrays. Yet another transform
you shouldn't need, but do now and then.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-data-array-transform
```

Usage
------------------------------------------------------------------------------

Now you can use the `array` transform in your models.

```javascript
import DS from 'ember-data'

export default DS.Model.extend({
    myArrayAttribute: DS.attr('array'),
    // ...
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
