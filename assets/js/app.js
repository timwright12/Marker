(function ($, w, doc) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var App = {};

  // Namespace
  App.ns = "Marker";

  // Start defining methods here
  App.init = function() {
    console.log(App.ns + ' is running.');
  };
  
  // Start the application
  App.init();

} )( jQuery, this, this.document );
