'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  bookView.initIndexPage = () => {
    $('.container').children().hide();
    $('#book-display').empty();
    app.showOnly('#book-display');
    module.Book.all.map(book => $('#book-display').append(book.toHtml('book-list-template')));
  }
  bookView.showSingleBook = (context) =>{
    $('.container').children().hide();
    $('#single-book-display').empty();
    app.showOnly('#single-book-display');
    let selectedBook = module.Book.all.filter(book => book.book_id === parseInt(context.params.id));
    $('#single-book-display').append(selectedBook[0].toHtml('single-book-template'));
  }


  module.bookView = bookView;
})(app);



//max- this is a document.ready function, which waits until the dom has loaded, then runs the fetch all function with an argument of initIndexPAge, which runs the callback function after the information from the server is recieved.
$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})
