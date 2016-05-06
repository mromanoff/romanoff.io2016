import Backbone from 'backbone';
import $ from 'jquery';
Backbone.$ = $;
import Marionette from 'backbone.marionette';
import 'backbone.syphon';
import 'backbone-query-parameters';
import 'babel-polyfill';
import 'owl.carousel';
import 'picturefill';

import './common/handlebars';

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
