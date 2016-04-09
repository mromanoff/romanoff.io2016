import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';

export default LayoutView.extend({
  el: '.application',
  template: template,

  regions: {
    header  : '[data-ui-component="header"]',
    flashes : '[data-ui-component="flashes"]',
    content : '[data-ui-component="content"]',
    footer  : '[data-ui-component="footer"]',
    overlay : '[data-ui-component="overlay"]'
  }
});
