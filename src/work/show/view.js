import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'work work--show container',

  initialize(options = {}) {
    this.model = options.model;
  },

  modelEvents: {
    all: 'render'
  },

  handleToggle() {
    this.model.set('active', !this.model.get('active'));
  }
});
