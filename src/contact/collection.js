/**
 * Contact Collection
 * @type {exports}
 */
import {Collection} from 'backbone';

let API = {
  url: 'https://api.mongolab.com',
  version: 1,
  database: 'romanoff-io',
  collection: 'contact',
  key: 'oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n'
};

export default Collection.extend({
  url() {
    return `${API.url}/api/${API.version}/databases/${API.database}/collections/${API.collection}?apiKey=${API.key}`;
  }
});
