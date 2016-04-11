/**
 * Code Collection
 * @type {exports}
 */

var Backbone = require('backbone');

var API = {
  url: 'https://api.github.com/users/mromanoff/repos',
  sort: 'updated'
};

module.exports = Backbone.Collection.extend({
  url() {
    return API.url + '?sort=' + API.sort;
  }
});
