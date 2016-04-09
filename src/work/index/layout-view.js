/**
 * Work Layout View
 * @type {exports}
 */


import _ from 'lodash';
import {LayoutView} from 'backbone.marionette';
import CollectionView from './collection-view';
import {Collection} from 'backbone';
import template from './layout-template.hbs';

export default LayoutView.extend({
  template: template,
  tagName: 'main',
  className: 'work work--index container',

  regions: {
    items: '[data-ui-component="gallery"]'
  },

  initialize(options = {}) {
    this.state = {start: 0, limit: 12};
    this.state.start = (options.page - 1) * this.state.limit;
  },

  onBeforeRender() {
    let filtered = _.chain(this.collection.models)
      .drop(this.state.start)
      .take(this.state.limit)
      .value();

    this.filteredCollection = new Collection(filtered);
  },

  onAttach() {
    this.collectionView = new CollectionView({
      collection: this.filteredCollection
    });

    this.items.show(this.collectionView);
  },

  templateHelpers() {
    let total = Math.ceil(this.collection.length / this.state.limit);
    let current = Math.ceil(this.state.start / this.state.limit) + 1;

    let pages = _.times(total, index => {
      return {
        current: index + 1 === current,
        page: index + 1
      };
    });

    let prev = current - 1 > 0 ? current - 1 : false;
    let next = current < total ? current + 1 : false;

    return {total, current, pages, prev, next};
  }
});
