import './plugins';
import Backbone from 'backbone';
import $ from 'jquery';

import Application from './application/application';

import ModalService from './modal/service';
import HeaderService from './header/service';
import FooterService from './footer/service';
import FlashesService from './flashes/service';

import OverviewRouter from './overview/router';
import WorkRouter from './work/router';
import PhotographyRouter from './photography/router';
import ContactRouter from './contact/router';

let app = new Application();

ModalService.setup({
  container: app.layout.overlay
});

HeaderService.setup({
  container: app.layout.header
});

FooterService.setup({
  container: app.layout.footer
});

FlashesService.setup({
  container: app.layout.flashes
});

$(document).ajaxError(() => {
  FlashesService.add({
    type: 'danger',
    title: 'Server Error'
  });
});

app.overview = new OverviewRouter({
  container: app.layout.content
});

app.work = new WorkRouter({
  container: app.layout.content
});

app.photography = new PhotographyRouter({
  container: app.layout.content
});

app.contact = new ContactRouter({
  container: app.layout.content
});

Backbone.history.start();
