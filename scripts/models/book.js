
app = app || {};

(function(module){

  function Book(ObjLiteral) { Object.keys(ObjLiteral).forEach(key => this[key] = ObjLiteral[key]);}

  Book.prototype.toHtml = function() {
    return app.render("book-list-template");
  }
  Book.fetchAll = callback =>{
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }

module.Book = Book;

})(app);