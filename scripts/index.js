var app = app || {};

(function(module){

  let productionApiUrl = 'https://mm-jc-todo-app-server.herokuapp.com/';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };
  module.showOnly = (selector) => {
    $('#bookDisplay').hide();
    $(selector).show();
  }
  module.render = (templateId, data) => {
    if(!module.taskTemplate) {
      module.taskTemplate = Handlebars.compile($(`#${templateId}`).text());
    }
    return module.taskTemplate(data);
  }
  module.Book = function Book(ObjLiteral) {
      Object.keys(ObjLiteral).forEach(key => this[key] = ObjLiteral[key]);
    }
  
  Book.all = [];
})(app);

