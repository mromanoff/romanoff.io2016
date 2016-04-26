/**
 * Recent Work View
 * @type {Marionette.ItemView|exports}
 */
import {ItemView} from 'backbone.marionette';
var template = require('./template.hbs');

export default ItemView.extend({
  template: template,

  serializeData: function(){
    return {
      recentWork: this.collection.toJSON().slice(0, 4)
    };
  }
});
