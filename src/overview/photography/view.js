/**
 * Recent Photography
 * @type {Marionette.ItemView|exports}
 */
var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  initialize: function () {
    // filter out nsfw (not safe for work)
    this.collection.reset(this.collection.chain()
      .filter(function(model) { return model.get('nsfw') === false;})
      .sample(4)
      .value()
    );
  },

  serializeData: function(){
    return {
      recentPhotography: this.collection.toJSON()
    };
  }
});
