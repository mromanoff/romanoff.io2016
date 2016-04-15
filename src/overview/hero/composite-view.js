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
  className: 'hero',

  childView: ItemView,
  childViewContainer: '[data-action="carousel"]',

  ui: {
    carousel: '[data-action="carousel"]',
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
      loop: true,
      autoplay: true,
      dots: true,
      smartSpeed: 500,
      autoplayHoverPause: true,



      paginationSpeed: 500,
      rewindSpeed: 1000
    });
  },

  showNext() {
    this.ui.carousel.trigger('next.owl.carousel');
  },

  showPrev() {
    this.ui.carousel.trigger('prev.owl.carousel');
  }

});
