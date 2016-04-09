/***
 * Code View
 * @type {Marionette.ItemView|exports}
 */

var View = require('../../common/view');
var template = require('./template.hbs');

module.exports = View.extend({
    template: template,

    serializeData: function () {
        return {
            repos: this.collection.toJSON().slice(0, 5)
        };
    }
});
