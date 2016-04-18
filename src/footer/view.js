import _ from 'lodash';
import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

export default ItemView.extend({
  template: template,
  tagName: 'footer',
  className: 'footer',

  attributes: {
    role: 'contentinfo'
  },

  collectionEvents: {
    'all': 'render'
  },

  templateHelpers() {
    return {
      primaryItems: this.serializeWhere({type: 'primary'}),
      secondaryItems: this.serializeWhere({type: 'secondary'}),
      currentYear: new Date().getFullYear()
    };
  },

  serializeWhere: function (props) {
    return _.invoke(this.collection.where(props), 'toJSON');
  }
});
