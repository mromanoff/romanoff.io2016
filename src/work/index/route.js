/**
 * Work Index Route
 * @type {exports}
 */


import {Route} from 'backbone-routing';
import Radio from 'backbone.radio';


import LayoutView from './layout-view';
import storage from '../storage';

let routerChannel = Radio.channel('router');

export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  fetch() {
    routerChannel.trigger('before:enter:route');

    return storage.findAll().then(collection => {
      this.collection = collection;
    });
  },

  render(params) {
    let page = params && parseFloat(params.page) || 1;

    routerChannel.trigger('enter:route');

    this.layoutView = new LayoutView({
      collection: this.collection,
      page: page
    });

    this.container.show(this.layoutView);
  }
});
