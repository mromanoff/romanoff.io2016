var Backbone = require('backbone');
var fixture = require('./fixture');
var collection = new Backbone.Collection(fixture);

var id = collection.length;

module.exports = function(api) {
  api.route('/api/work')
    .get(function(req, res) {


      //window.setTimeout(function () {
        res.json(collection);
      //}, 5000);



    });

  api.route('/api/work/:id')
    .get(function(req, res) {
      var model = collection.get(req.params.id);
      res.json(model);
    });
};
