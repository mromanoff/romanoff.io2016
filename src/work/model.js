var _ = require('lodash');
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

  urlRoot: '/api/work',

  initialize() {
    // this is hack to deal with MongoLab _id object.
    // if(!_.isUndefined(this.get('_id'))) {
    //   this.set({id: this.get('_id').$oid});
    // }
  }


});
