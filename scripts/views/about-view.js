'use strict'

app = app || {};

(function(module){
  aboutView = {};
  
aboutView.initAboutPage = () => {
  $('.container').children().hide();
  $('#about-display').empty();
  app.showOnly('#about-display');
  
}
  module.aboutView = aboutView;
})(app);