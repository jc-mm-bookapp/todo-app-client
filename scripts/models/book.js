
app = app || {};

(function(module){

  //max -- this is the constructor function that is making the book objects in the client side
  function Book(ObjLiteral) { Object.keys(ObjLiteral).forEach(key => this[key] = ObjLiteral[key]);}

  //max -- this a
  Book.prototype.toHtml = function() {
    return app.render("#book-list-template", this);
  }
  
  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b => b.title - a.title).map(book => new Book(book)));

  Book.fetchAll = callback =>{
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }

module.Book = Book;

})(app);