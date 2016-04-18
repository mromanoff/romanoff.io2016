/**
 * Contact Model
 * @type {exports}
 */
import {Model} from 'backbone';

var API = {
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
    email: null,
    phone: null
  },

  url() {
    //return API.url + '/api/' + API.version + '/databases/' + API.database + '/collections/' + API.collection + '?apiKey=' + API.key;
    return `${API.url}/api/${API.version}/databases/${API.database}/collections/${API.collection}?apiKey=${API.key}`;
  },

  validate(attrs) {
    var errors = [];

    if (attrs.firstName === '') {
      errors.push('Missing "First Name" field');
    }

    if (attrs.lastName === '') {
      errors.push('Missing "Last Name" field');
    }

    if (attrs.email === '') {
      errors.push('Missing "Email" field');
    }

    if (attrs.phone === '') {
      errors.push('Missing "Phone" field');
    }

    return errors.length > 0 ? errors : undefined;
  }
});
