import Storage from 'backbone.storage';
import Model from './model';

var ContactStorage = Storage.extend({
  model: Model
});

export default new ContactStorage();
