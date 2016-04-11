/***
 * Code View
 * @type {Marionette.ItemView|exports}
 */

import {ItemView} from 'backbone.marionette';
var template = require('./template.hbs');

module.exports = ItemView.extend({
    template: template,

    serializeData() {
        return {
            repos: this.collection.toJSON().slice(0, 5)
        };
    }
});
