/**
 * Recent Work View
 * @type {Marionette.ItemView|exports}
 */
import {ItemView} from 'backbone.marionette';
var template = require('./template.hbs');

export default ItemView.extend({
  template: template,

  initialize() {
    this.collection.reset(this.collection.slice(0, 4));
  },

  serializeData: function(){
    return {
      recentWork: this.collection.toJSON()
    };
  }
});
