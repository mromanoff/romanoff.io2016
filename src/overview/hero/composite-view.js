/**
 * Overview Hero Composite View
 * @type {exports}
 * @private
 */

import {CompositeView} from 'backbone.marionette';
import ItemView from './item-view';
import template from './composite-template.hbs';

export default CompositeView.extend({
  template: template,

  childView: ItemView,
  childViewContainer: '.carousel',

  ui: {
    carousel: '.carousel',
    next: '.next',
    prev: '.prev'
  },

  events: {
    'click .next': 'showNext',
    'click .prev': 'showPrev'
  },

  onShow() {
    // this.ui.carousel.owlCarousel({
    //   slideSpeed: 500,
    //   paginationSpeed: 500,
    //   rewindSpeed: 1000,
    //   singleItem: true,
    //   autoPlay: true
    // });
  },

  showNext() {
    this.ui.carousel.trigger('owl.next');
  },

  showPrev() {
    this.ui.carousel.trigger('owl.prev');
  }

});
