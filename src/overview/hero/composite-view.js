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
    carousel: '[data-action="owl-carousel"]',
    next: '.next',
    prev: '.prev'
  },

  events: {
    'click .next': 'showNext',
    'click .prev': 'showPrev'
  },

  onShow() {
    this.ui.carousel.owlCarousel({
      items: 1,
      loop:false,
      nav: true,
      autoplay: true,
      dots: true,
      smartSpeed: 500,


      paginationSpeed: 500,
      rewindSpeed: 1000
    });
  },

  showNext() {
    this.ui.carousel.trigger('owl.next');
  },

  showPrev() {
    this.ui.carousel.trigger('owl.prev');
  }

});
