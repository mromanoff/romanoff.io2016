/**
 * Photography Show View
 * @type {exports}
 */

import {ItemView} from 'backbone.marionette';
import {history} from 'backbone';
import template from './template.hbs';

import GoBackBehavior from '../../behaviors/go-back';

export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'photography photography--show container',


  initialize(options = {}) {
    console.log(this);
  },

  ui: {
    goBack: '.goBack'
  },

  behaviors: {
    GoBackBehavior: {
      behaviorClass: GoBackBehavior
    }
  }
});
