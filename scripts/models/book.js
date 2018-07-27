
app = app || {};

(function(module){

  function errorCallback(err){
    console.error(err);
    app.errorView.initErrorPage(err);
  }

  //max -- this is the constructor function that is making the book objects in the client side
  function Book(ObjLiteral) { Object.keys(ObjLiteral).forEach(key => this[key] = ObjLiteral[key]);}

  //max -- this a prototype function that allows a book object to be rendered in the html.
  Book.prototype.toHtml = function(templateId) {
    return app.render(templateId, this);
  }
  
  Book.all = [];

  //max - this takes all of the rows obtained from the SQL back-end, sorts them by title, and makes them into book objects in the front end
  Book.loadAll = rows => Book.all = rows.map(book => new Book(book));

  //max - this is the actual function that is interacting with the controller, as it is finding the books table, receiving the response for that function from the controller, and putting that response as an argument in loadAll
  Book.fetchAll = callback =>{
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then($('#book-display').empty())
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }


  //--------------------------------------------------------------
  //--------------------------------------------------------------

  // Book.loadOne = singleBook => 
  // Book.createOne =  

  Book.fetchOne = (context, callback) =>{
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${context.params.id}`)
      // .then(result => context.book = result[0])
      .then(callback)
      .catch(errorCallback);
  }

  Book.createNew = callback =>{
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }
  //--------------------------------------------------------------
  //--------------------------------------------------------------

  //max - this gives the object made (Book) the pretense of app, as this entire file is wrapped in an iife statement
module.Book = Book;

})(app);