'use strict'

var app = app || {};

(function(module){
  let aboutView = {};

  aboutView.initAboutPage = (context) =>{
    $('.container').children().hide();
    app.showOnly('#about-display');
  }



  module.aboutView = aboutView;
})(app);