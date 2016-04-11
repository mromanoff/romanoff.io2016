/**
 * Recent Photography
 * @type {Marionette.ItemView|exports}
 */
import {ItemView} from 'backbone.marionette';
var template = require('./template.hbs');

module.exports = ItemView.extend({
  template: template,

  initialize() {
    // filter out nsfw (not safe for work)
    this.collection.reset(this.collection.chain()
      .filter(function (model) {
        return model.get('nsfw') === false;
      })
      .sample(4)
      .value()
    );
  },

  serializeData() {
    return {
      recentPhotography: this.collection.toJSON()
    };
  }
});
