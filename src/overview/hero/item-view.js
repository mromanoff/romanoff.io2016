/***
 * Hero Item View
 * @type {Marionette.ItemView|exports}
 */
import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

export default ItemView.extend({
  template: template,
  className: 'item hero-item'

  //,

  //TODO: why you need this?
  // serializeData() {
  //   return this.model.toJSON();
  // }
});
