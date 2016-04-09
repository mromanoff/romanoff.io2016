import Storage from 'backbone.storage';
//import Model from './model';
import Collection from './hero/collection';

var OverviewStorage = Storage.extend({
  //model: Model,
  collection: Collection
});

export default new OverviewStorage();
