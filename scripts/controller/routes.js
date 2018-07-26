'use strict'

// --------------------------------------------
// FRONT-END ROUTES
// --------------------------------------------
page('/',app.bookView.initIndexPage);
// page('/about',aboutView.init);
// page('/contact',contactView.init);
page('/books/:id',app.bookView.showSingleBook);
// --------------------------------------------

// Vinicio - this line has to be placed at the end of the file, AFTER you define any front-end routes
page(); // Vinicio - this line is starting the Page JS Engine
