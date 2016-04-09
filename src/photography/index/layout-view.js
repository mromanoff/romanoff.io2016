/**
 * Photography Layout View
 * @type {exports}
 */

import {LayoutView} from 'backbone.marionette';
import CollectionView from './collection-view';
import {Collection} from 'backbone';
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

  // ui: {
  //   sortPictures: '.sortBy'
  // },

  // events: {
  //   'click .sortBy a': 'sortPictures'
  // },


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
  //,

  // sortPictures(e) {
  //   e.preventDefault();
  //   var sort = $(e.currentTarget).data('sort-name');
  //   this.ui.sortPictures.find('li').removeClass('active');
  //   this.ui.sortPictures.find('a[data-sort-name="' + sort + '"]').closest('li').addClass('active');
  //   //TODO trigger route + keep page number
  // }
});
