import {Collection} from 'backbone';
import Model from './model';

export default Collection.extend({
  //url: 'https://api.mongolab.com/api/1/databases/romanoff-io/collections/work?apiKey=oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n',
  url: '/api/work',

  model: Model
});
