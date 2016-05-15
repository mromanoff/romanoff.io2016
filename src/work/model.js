import {Model} from 'backbone';

export default Model.extend({

  defaults: {
    active: false,
    visible: false,
    category: null,
    name: null,
    url: null,
    image: null,
    description: null,
    information: null,
    client: []
  },

  urlRoot: '/api/work'

});
