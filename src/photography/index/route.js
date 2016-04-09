/**
 * Photography Index Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import LayoutView from './layout-view';
import storage from '../storage';


module.exports = Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  fetch: function (params) {
    let page = params && parseFloat(params.page) || 1;

    return storage.findAll({data: { page: page}}, true).then(collection => {
      this.collection = collection;
    });
  },

  render() {
    this.layoutView = new LayoutView({
      collection: this.collection
    });

    this.container.show(this.layoutView);
  }
});
