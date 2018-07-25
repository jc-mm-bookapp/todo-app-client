'use strict';

var app = app || {};

(function(module){

  // let productionApiUrl = 'https://bookapp-mm-jc.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };
  module.showOnly = (selector) => {
    $('#book-display').hide();
    $(selector).show();
  }
  module.render = (templateId, data) => {
    if(!module.taskTemplate) {
      module.taskTemplate = Handlebars.compile($(`#${templateId}`).text());
    }
    return module.taskTemplate(data);
  }
})(app);

