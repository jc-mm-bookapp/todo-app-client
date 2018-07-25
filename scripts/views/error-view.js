'use strict';

var app = app || {};

(function(module) {
  const errorView = {};
    errorView.initErrorPage = error => {
      app.showOnly('.error-view');
      $('#error-message').empty();
      $('#error-message').append( app.render ('error-template', error));
    }
    module.errorView = errorView;
})(app);

