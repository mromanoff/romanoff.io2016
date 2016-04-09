/**
 * Code Collection
 * @type {exports}
 */

//var Model = require('../common/model');
var Backbone = require('backbone');

var API = {
  url: 'https://api.github.com/users/mromanoff/repos',
  sort: 'updated'
};

module.exports = Backbone.Collection.extend({
  url: function() {
    return API.url + '?sort=' + API.sort;
  }
});
