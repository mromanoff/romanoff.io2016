var Backbone = require('backbone');
var fixture = require('./fixture');
var collection = new Backbone.Collection(fixture);

module.exports = function (api) {
  api.route('/api/hero')
    .get(function (req, res) {

      //window.setTimeout(function () {
      res.json(collection);
      //}, 5000);

    });
};
