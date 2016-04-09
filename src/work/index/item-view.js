/**
 * Work Index Item-View
 * @type {Marionette.ItemView|exports}
 */

import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

export default ItemView.extend({
  tagName: 'a',
  template: template,
  className: 'gallery__item',

  attributes() {
    return {
      href: `#work/${this.model.get('id')}`
    };
  }
});
