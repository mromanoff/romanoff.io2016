/**
 * Contact Router
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
      name: 'Contact',
      path: 'contact',
      type: 'primary'
    });

    FooterService.request('add', {
      name: 'Contact',
      path: 'contact',
      type: 'primary'
    });
  },

  onBeforeEnter: function() {
    HeaderService.request('activate', {
      path: 'contact'
    });

    FooterService.request('activate', {
      path: 'contact'
    });

  },

  routes: {
    'contact': 'index',
    'contact-show': 'show'
  },

  index: function() {
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
