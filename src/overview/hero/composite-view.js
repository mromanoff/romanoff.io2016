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
    next: '[data-action="next"]',
    prev: '[data-action="prev"]'
  },

  events: {
    'click @ui.next': 'showNext',
    'click @ui.prev': 'showPrev'
  },

  onShow() {
    this.ui.carousel.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: true,
      smartSpeed: 500,
      autoplayHoverPause: true
    });
  },

  showNext() {
    this.ui.carousel.trigger('next.owl.carousel');
  },

  showPrev() {
    this.ui.carousel.trigger('prev.owl.carousel');
  }

});
