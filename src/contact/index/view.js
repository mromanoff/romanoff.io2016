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

import _ from 'underscore';


export default ItemView.extend({
  template: template,
  tagName: 'main',
  className: 'contact contact--index',

  behaviors: {
    form: { behaviorClass: FormBehavior }
  },

  templateHelpers() {
    //TODO: refactor error validation
    let firstNameError;
    let lastNameError;
    let emailError;
    let phoneError;


    if(this.errors) {
      let errorNames = this.errors.map((error) => {
        return error.key;
      });

      firstNameError = _.contains(errorNames, 'firstName');
      lastNameError = _.contains(errorNames, 'lastName');
      emailError = _.contains(errorNames, 'email');
      phoneError = _.contains(errorNames, 'phone');
    }

    return {
      errors: this.errors,
      firstNameError: firstNameError,
      lastNameError: lastNameError,
      emailError: emailError,
      phoneError: phoneError
    };
  },

  events: {
    'submit form': 'handleSubmit'
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
        history.navigate('/', { trigger: true });
      });
    }
  }
});
