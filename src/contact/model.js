/**
 * Contact Model
 * @type {exports}
 */
import {Model} from 'backbone';

let API = {
  url: 'https://api.mongolab.com',
  version: 1,
  database: 'romanoff-io',
  collection: 'contact',
  key: 'oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n'
};

export default Model.extend({
  defaults: {
    firstName: null,
    lastName: null,
    email: null
  },

  url() {
    return `${API.url}/api/${API.version}/databases/${API.database}/collections/${API.collection}?apiKey=${API.key}`;
  },

  validate(attrs) {
    let errors = {};
    errors.status = 0;

    if (attrs.firstName === '') {
      errors.firstName = {
        message: 'Please enter your first name'
      };

      errors.status = 1;
    }

    if (attrs.lastName === '') {
      errors.lastName = {
        message: 'Please enter your last name'
      };

      errors.status = 1;
    }

    if (attrs.email === '') {
      errors.email = {
        message: 'Please enter your email'
      };

      errors.status = 1;
    }

    return errors.status === 1 ? errors : undefined;
  }

});
