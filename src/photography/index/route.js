/**
 * Photography Index Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import Radio from 'backbone.radio';

import LayoutView from './layout-view';
import storage from '../storage';

let routerChannel = Radio.channel('router');

module.exports = Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  fetch: function (params) {
    let page = params && parseFloat(params.page) || 1;

    routerChannel.trigger('before:enter:route');

    return storage.findAll({data: { page: page}}, true).then(collection => {
      this.collection = collection;
    });
  },

  render() {
    routerChannel.trigger('enter:route');

    this.layoutView = new LayoutView({
      collection: this.collection
    });

    this.container.show(this.layoutView);
  }
});
