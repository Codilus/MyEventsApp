(function() {
  'use strict';

  var SERVER_PATH = "https://my-events.herokuapp.com";

  angular.module('MyEventsApp')
  .constant("Paths", {
    server: SERVER_PATH,
    api: SERVER_PATH
  });
})();
