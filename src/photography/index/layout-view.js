/**
 * Photography Layout View
 * @type {exports}
 */

import {LayoutView} from 'backbone.marionette';
import CollectionView from './collection-view';
import template from './layout-template.hbs';

export default LayoutView.extend({
  template: template,
  tagName: 'main',
  className: 'photography photography--index container',

  regions: {
    items: '[data-ui-component="gallery"]'
  },

  onAttach() {
    this.collectionView = new CollectionView({
      collection: this.collection
    });

    this.items.show(this.collectionView);
  },

  templateHelpers() {
    let pageCount = this.collection.pageCount;
    let page = this.collection.page;

    return {
      pagination: {
        page: page,
        pageCount: pageCount
      }
    };
  }
});
