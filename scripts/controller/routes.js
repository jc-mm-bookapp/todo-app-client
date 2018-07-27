'use strict'

// --------------------------------------------
// FRONT-END ROUTES
// --------------------------------------------
page('/', ctx => app.bookView.initIndexPage());
// page('/about',app.aboutView.init);
// page('/contact',contactView.init);
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.showSingleBook));
// --------------------------------------------

// Vinicio - this line has to be placed at the end of the file, AFTER you define any front-end routes
page(); // Vinicio - this line is starting the Page JS Engine
