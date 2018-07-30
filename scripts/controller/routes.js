'use strict'

// --------------------------------------------
// FRONT-END ROUTES
// --------------------------------------------
page('/', ctx => app.bookView.initIndexPage(ctx));
page('/about', ctx => app.aboutView.initAboutPage(ctx));
// page('/contact',contactView.init);
page('/new', ctx => app.formView.initFormPage(ctx));
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.showSingleBook));
page('todo-app-client/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.showSingleBook));
// --------------------------------------------

// Vinicio - this line has to be placed at the end of the file, AFTER you define any front-end routes
page(); // Vinicio - this line is starting the Page JS Engine
