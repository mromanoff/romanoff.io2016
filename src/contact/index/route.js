/**
 * Contact Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import View from './view';
import Model from '../model';


export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  render() {
    this.view = new View({
      model: new Model()
    });

    this.container.show(this.view);
  }
});
