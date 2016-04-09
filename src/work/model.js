var _ = require('lodash');
import {Model} from 'backbone';

export default Model.extend({

  //idAttribute: '_id',

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
    //,
    //apiKey: 'oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',
    //dataUrl: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work/'
  },

  //urlRoot: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work?apiKey=oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',
  urlRoot: '/api/work',

  initialize() {
    // this is hack to deal with MongoLab _id object.
    if(!_.isUndefined(this.get('_id'))) {
      this.set({id: this.get('_id').$oid});
    }
  }


});
