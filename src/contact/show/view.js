/**
 * Contact Show View
 * @type {exports}
 */

import {ItemView} from 'backbone.marionette';
import template from './template.hbs';
import GoBackBehavior from '../../behaviors/go-back';

export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'contact contact--show container',

  initialize() {
    console.log(this.collection.toJSON());
  },


  templateHelpers: function () {
    return {
      entries: this.collection.toJSON()
    };
  }


});
