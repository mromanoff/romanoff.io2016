/**
 * Contact Show View
 * @type {exports}
 */

import {ItemView} from 'backbone.marionette';
import template from './template.hbs';


export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'contact contact--show container',

  templateHelpers: function () {
    return {
      entries: this.collection.toJSON()
    };
  }
});
