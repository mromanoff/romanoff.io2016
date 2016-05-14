/**
 * Photography Show Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import Radio from 'backbone.radio';

import View from './view';
import storage from '../storage';

let routerChannel = Radio.channel('router');

export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  fetch(id) {
    routerChannel.trigger('before:enter:route');

    return storage.find(id, true).then(model => {
      this.model = model;
    });
  },

  render() {
    routerChannel.trigger('enter:route');

    this.view = new View({
      model: this.model
    });
    this.container.show(this.view);
  }
});
