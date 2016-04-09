/**
 * Photography Index Item-View
 * @type {Marionette.ItemView|exports}
 */

import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

module.exports = ItemView.extend({
  tagName: 'a',
  template: template,
  className: 'gallery__item',

  attributes() {
    return {
      href: `#photography/${this.model.get('id')}`
    };
  }
});
