/**
 * Photography Collection
 * @type {exports}
 */
import {Collection} from 'backbone';
//import Model from './model';

var API = {
  url: 'https://api.500px.com/v1/photos',
  consumerKey: 'vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK',
  userId: 678550,
  feature: 'user',
  rpp: 24, // Can not be over 100, default 20. 12 and 24 best for grids.
  sort: 'highest_rating',  // 'created_at', times_viewed, votes_count, favorites_count,
  sortDirection: 'desc', // 'asc'
  imageSize: 3,
  exclude: 'Nude',
  tags: 1 // If set to 1, returns an array of tags for the photo.
};

export default Collection.extend({
  //model: Model,

  url() {
    //return API.url + '?exclude=' + API.exclude + '&feature=' + API.feature + '&user_id=' + API.userId + '&sort=' + API.sort + '&image_size=' + API.imageSize + '&page=' + this.page + '&tags=' + API.tags + '&rpp=' + API.rpp + '&consumer_key=' + API.consumerKey; // jshint ignore:line
    return `${API.url}?exclude=${API.exclude}&feature=${API.feature}&user_id=${API.userId}&sort=${API.sort}&image_size=${API.imageSize}&page=${this.page}&tags=${API.tags}&rpp=${API.rpp}&consumer_key=${API.consumerKey}`; // jshint ignore:line
  },

  parse(response) {
    this.pageCount = response.total_pages; // jshint ignore:line
    this.page = response.current_page;
    return response.photos;
  }
});
