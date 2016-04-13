/***
 * Hero Item View
 * @type {Marionette.ItemView|exports}
 */
import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

export default ItemView.extend({
  template: template,
  className: 'hero__item'
});
