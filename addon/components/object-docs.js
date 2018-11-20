import Component from '@ember/component';
import { computed } from '@ember/object';

import layout from '../templates/components/object-docs';

export default Component.extend({
  layout,
  keys: computed('obj', function() {
    if(typeof(this.obj.content) === 'object') {
      return Object
        .keys(this.obj.content.__proto__)
        .filter(k => !k.startsWith('_'));
    }

    if(this.obj.data) {
      return Object
        .keys(this.obj.data)
        .filter(k => !k.startsWith('_'))
    }

    return Object
      .keys(this.obj.__proto__)
      .filter(k => !k.startsWith('_'))
  })
});
