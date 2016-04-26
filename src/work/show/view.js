/**
 * Work Show View
 * @type {exports}
 */

import {ItemView} from 'backbone.marionette';
import template from './template.hbs';
import GoBackBehavior from '../../behaviors/go-back';

export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'work work--show container',

  ui: {
    goBack: '[data-action="go-back"]'
  },

  behaviors: {
    GoBackBehavior: {
      behaviorClass: GoBackBehavior
    }
  }
});
