/**
 * Overview Layout View
 * @type {exports}
 */

import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';


export default LayoutView.extend({
  template: template,
  tagName: 'main',
  className: 'overview overview--index',

  regions: {
    hero: '.overview__hero',
    work: '.overview__work',
    photography: '.overview__photography',
    code: '.overview__code'
  }
});
