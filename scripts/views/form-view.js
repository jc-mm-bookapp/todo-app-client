'use strict'

var app = app || {};

(function(module){
  let formView = {};

  formView.initFormPage = (context) =>{
    $('.container').children().hide();
    // $('#form-display').empty();
    app.showOnly('#form-display');
    $('#new-form').on('submit', function(event){
      event.preventDefault();

      let newBook = {
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      image_url: $('#book-url').val(),
      isbn: $('#book-isbn').val(),
      book_description: $('#book-description').val()
    };
    app.Book.createNew(newBook);
    });
  }
  module.formView = formView;
})(app);