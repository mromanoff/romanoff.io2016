/**
 * Overview Router
 * @type {exports}
 */

import {Router} from 'backbone-routing';
import HeaderService from '../header/service';
import FooterService from '../footer/service';
import LayoutView from './layout-view';
import IndexRoute from './index/route';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.listenTo(this, 'before:enter', this.onBeforeEnter);

    HeaderService.request('add', {
      name: 'Overview',
      path: '',
      type: 'primary'
    });

    FooterService.request('add', {
      name: 'Overview',
      path: '',
      type: 'primary'
    });
  },

  onBeforeEnter: function () {
    this.layout = new LayoutView();
    this.container.show(this.layout);

    HeaderService.request('activate', {
      path: ''
    });

    FooterService.request('activate', {
      path: ''
    });
  },

  routes: {
    '': 'index'
  },

  index: function () {
    return new IndexRoute({
      layout: this.layout
    });
  }
});
