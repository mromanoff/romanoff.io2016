/**
 * Photography Router
 * @type {exports}
 */

import {Router} from 'backbone-routing';
import HeaderService from '../header/service';
import FooterService from '../footer/service';

import IndexRoute from './index/route';
import ShowRoute from './show/route';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.listenTo(this, 'before:enter', this.onBeforeEnter);

    HeaderService.request('add', {
      name: 'Photography',
      path: 'photography',
      type: 'primary'
    });

    FooterService.request('add', {
      name: 'Photography',
      path: 'photography',
      type: 'primary'
    });
  },

  onBeforeEnter: function () {
    HeaderService.request('activate', {
      path: 'photography'
    });
    FooterService.request('activate', {
      path: 'photography'
    });
  },

  routes: {
    'photography': 'index',
    'photography/:id': 'show'
  },

  index() {
    return new IndexRoute({
      container: this.container
    });
  },

  show() {
    return new ShowRoute({
      container: this.container
    });
  }
});
