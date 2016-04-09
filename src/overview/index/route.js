/**
 * Overview Route
 * @type {exports}
 */

import {Route} from 'backbone-routing';
import HeroView from '../hero/composite-view';
import WorkView from './../work/view';

//import CodeView from '../code/view';
import storage from '../storage';
import workStorage from '../work/storage';


// var heroCollection = require('./hero/collection');
// var WorkCollection = require('../work/collection');
// var PhotographyCollection = require('../photography/collection');
// var CodeCollection = require('./code/collection');


// var $ = require('jquery');
// var Route = require('../common/route');
// var HeroView = require('./../hero/composite-view');
// var WorkView = require('./../work/view');
// var PhotographyView = require('./../photography/view');
// var CodeView = require('./../code/view');

export default Route.extend({
  initialize(options = {}) {
    this.layout = options.layout;

    this.listenTo(this, 'fetch', this.onFetch);

    // this.heroCollection = options.heroCollection;
    // this.workCollection = options.workCollection;
    // this.photographyCollection = options.photographyCollection;
    // this.codeCollection = options.codeCollection;
  },

  fetch(id) {
    return workStorage.findAll().then(collection => {
      this.workCollection = collection;
    });
    // return $.when(
    //   this.codeCollection.fetch(),
    //   this.workCollection.fetch(),
    //   this.photographyCollection.fetch()
    // );
  },

  render() {
    // this.hero = new HeroView({
    //   collection: this.collection
    // });

    this.work = new WorkView({
      collection: this.workCollection
    });
    //
    // this.photography = new PhotographyView({
    //   collection: this.photographyCollection
    // });
    //
    // this.code = new CodeView({
    //   collection: this.codeCollection
    // });

    //this.layout.hero.show(this.hero);
    this.layout.work.show(this.work);
    // this.layout.photography.show(this.photography);
    // this.layout.code.show(this.code);
  }
});
