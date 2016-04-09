import {Behavior} from 'backbone.marionette';


module.exports = Behavior.extend({

  events: {
    'click @ui.goBack': 'goBack'
  },

  goBack: function (e) {
    e.preventDefault();
    window.history.back();
  }
});
