import Handlebars  from 'hbsfy/runtime';
import pagination  from 'handlebars-paginate';

Handlebars.registerHelper('upcase', function(s) {
  return s.toUpperCase();
});

Handlebars.registerHelper('lowcase', function(s) {
  return s.toLowerCase();
});

Handlebars.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 0; i < n; i++) {
    accum += block.fn(i);
  }
  return accum;
});

Handlebars.registerHelper('pagination', pagination);
