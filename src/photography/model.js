/**
 * Photography Model
 * @type {exports}
 */

import {Model} from 'backbone';

var API = {
  url: 'https://api.500px.com/v1/photos/',
  consumerKey: 'vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK',
  imageSize: 4,
  comments: 20
};

export default Model.extend({

  url() {
    return API.url + this.get('id') + '?image_size=' + API.imageSize + '&comments=' + API.comments + '&consumer_key=' + API.consumerKey; // jshint ignore:line
  }
});
