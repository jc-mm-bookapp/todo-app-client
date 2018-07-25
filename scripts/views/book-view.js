'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  bookView.initIndexPage = () => {
    $('container').hide();
    app.showOnly('.book-view');
    module.Book.all.map(book => $('#book-display').append(book.toHtml()));
  }


  module.bookView = bookView;
})(app);

//max- this is a document.ready function, which waits until the dom has loaded, then runs the fetch all function with an argument of initIndexPAge, which runs the callback function after the information from the server is recieved.
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})