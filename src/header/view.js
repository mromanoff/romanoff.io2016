import _ from 'lodash';
import {history} from 'backbone';
import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

import $ from 'jquery';

export default ItemView.extend({
  template: template,
  tagName: 'header',
  className: 'header',

  attributes: {
    role: 'banner'
  },

  initialize: function () {
    this.$body = $(document.body);
    $(window).scroll(this.navTranslucent.bind(this));
  },

  collectionEvents: {
    all: 'render'
  },

  templateHelpers() {
    return {
      primaryItems   : this.serializeWhere({ type: 'primary' }),
      secondaryItems : this.serializeWhere({ type: 'secondary' })
    };
  },

  serializeWhere(props) {
    return _.invoke(this.collection.where(props), 'toJSON');
  },

  ui: {
    closeMenu: '[data-action="close-menu"]',
    openMenu: '[data-action="open-menu"]',
    headerLinks: '[data-target="header-links"]'
  },

  events: {
    'click @ui.openMenu': 'openMenu',
    'click @ui.closeMenu': 'closeMenu'
  },

  openMenu: function (e) {
    e.preventDefault();
    this.ui.openMenu.addClass('is-hidden');
    this.ui.closeMenu.removeClass('is-hidden');
    this.ui.headerLinks.addClass('header__links--open');
  },

  closeMenu: function (e) {
    e.preventDefault();
    this.ui.openMenu.removeClass('is-hidden');
    this.ui.closeMenu.addClass('is-hidden');
    this.ui.headerLinks.removeClass('header__links--open');
  },

  // On Scroll, make the nav translucent.
  navTranslucent: function () {
    if (this.$body.scrollTop() > this.$el.height()) {
      this.$el.addClass('header--active');
    } else {
      this.$el.removeClass('header--active');
    }
  }
  //,
  // onCollapseShow() {
  //   this.listenToOnce(history, 'route', () => {
  //     this.ui.collapse.collapse('hide');
  //   });
  // },
});
