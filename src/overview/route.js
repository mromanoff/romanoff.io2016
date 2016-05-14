/**
 * Overview Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import Radio from 'backbone.radio';

import HeroView from './hero/composite-view';
import WorkView from './work/view';
import PhotographyView from './photography/view';
import CodeView from './code/view';

import heroStorage from './hero/storage';
import workStorage from '../work/storage';
import photographyStorage from '../photography/storage';
import codeStorage from './code/storage';

let routerChannel = Radio.channel('router');

let components = [
  'hero',
  'work',
  'photography',
  'code'
];

export default Route.extend({
  initialize(options = {}) {
    this.layout = options.layout;
    this.listenTo(this, 'fetch', this.onFetch);
  },

  fetch() {
    routerChannel.trigger('before:enter:route');

    return Promise.all([
      heroStorage.findAll(),
      workStorage.findAll(),
      photographyStorage.findAll(),
      codeStorage.findAll()
    ]).then(function (collections) {
      collections.forEach(this.createCollection.bind(this));
    }.bind(this));
  },

  render() {
    routerChannel.trigger('enter:route');

    this.heroView = new HeroView({
      collection: this.heroCollection
    });

    this.workView = new WorkView({
      collection: this.workCollection
    });

    this.photographyView = new PhotographyView({
      collection: this.photographyCollection
    });

    this.codeView = new CodeView({
      collection: this.codeCollection
    });

    this.layout.hero.show(this.heroView);
    this.layout.work.show(this.workView);
    this.layout.photography.show(this.photographyView);
    this.layout.code.show(this.codeView);
  },

  createCollection(collection, index) {
    return this[`${components[index]}Collection`] = collection;
  }
});
