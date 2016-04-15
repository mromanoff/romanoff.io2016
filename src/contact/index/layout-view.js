/**
 * Contact View
 * @type {Marionette.ItemView|exports}
 */

//var FormBehavior = require('../../forms/behavior');


import _ from 'lodash';
import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';


export default LayoutView.extend({
  template: template,
  tagName: 'main',
  className: 'contact contact--index',

  initialize() {
    _.bindAll(this, 'handleSaveSuccess');
  },

  events: {
    'submit form': 'handleSubmit'
  },

  // behaviors: {
  //   form: { behaviorClass: FormBehavior }
  // },

  templateHelpers: function() {
    return {
      errors: this.errors
    };
  },

  handleSubmit: function () {
    var errors = this.model.validate(this.form);

    if (!errors) {
      nprogress.start();
      this.model.save(this.form).done(this.handleSaveSuccess);
    } else {
      this.errors = errors;
      this.render();
    }
  },

  handleSaveSuccess: function () {
    Backbone.history.navigate('/', { trigger: true });
  }
});
