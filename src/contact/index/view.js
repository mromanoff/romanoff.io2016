/**
 * Contact View
 * @type {Marionette.ItemView|exports}
 */

import nprogress from 'nprogress';
import {ItemView} from 'backbone.marionette';
import FormBehavior from '../../forms/behavior';
import {history} from 'backbone';
import template from './template.hbs';
import storage from '../storage';

import $ from 'jquery';


export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'contact contact--index',

  behaviors: {
    form: { behaviorClass: FormBehavior }
  },

  templateHelpers() {
    return {
      errors: this.errors
    };
  },

  events: {
    'submit form': 'handleSubmit',
    'focus input': 'clearInputError'
  },

  clearInputError(e) {
    var $target = $(e.currentTarget);
    $target.closest('.form-group').removeClass('has-error');
  },

  handleSubmit() {
    let errors = this.model.validate(this.form);

    if (errors) {
      this.errors = errors;
      this.render();
    } else {
      nprogress.start();
      this.model.set(this.form);
      storage.save(this.model).then(() => {
        history.navigate('', { trigger: true });
      });
    }
  }
});
