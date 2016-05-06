/**
 * Work Collection
 * @type {exports}
 */


import {Collection} from 'backbone';
import Model from './model';

export default Collection.extend({
  url: '/api/work',

  model: Model
});
