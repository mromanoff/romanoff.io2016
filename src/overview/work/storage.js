import Storage from 'backbone.storage';
import Collection from '../../work/collection';
import Model from '../../work/model';

var WorkStorage = Storage.extend({
  model: Model,
  collection: Collection
});

export default new WorkStorage();
