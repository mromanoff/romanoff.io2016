/**
 * WOrk Router
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
      name: 'Work',
      path: 'work',
      type: 'primary'
    });

    FooterService.request('add', {
      name: 'Work',
      path: 'work',
      type: 'primary'
    });
  },

  onBeforeEnter() {
    HeaderService.request('activate', {
      path: 'work'
    });

    FooterService.request('activate', {
      path: 'work'
    });
  },

  routes: {
    'work': 'index',
    'work/:id': 'show'
  },

  index() {
    return new IndexRoute({
      container: this.container
    })
  },

  show() {
    return new ShowRoute({
      container: this.container
    });
  }
})
