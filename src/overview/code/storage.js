import Storage from 'backbone.storage';
import Collection from './collection';
//import Model from '../../work/model';

var CodeStorage = Storage.extend({
  //model: Model,
  collection: Collection
});

export default new CodeStorage();
