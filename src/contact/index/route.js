/**
 * Contact Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import LayoutView from './layout-view';
import storage from '../storage';


export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  fetch() {
    return storage.find().then(model => {
      this.model = model;
    });
  },

  render() {
    this.layoutView = new LayoutView({
      model: this.model
    });

    this.container.show(this.layoutView);
  }
});
