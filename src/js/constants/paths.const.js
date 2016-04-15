(function() {
  'use strict';

  // var SERVER_PATH = "https://my-events.herokuapp.com";
  var SERVER_PATH = "http://localhost:3000";

  angular.module('MyEventsApp')
    .constant("Paths", {
      server: SERVER_PATH,
      api: SERVER_PATH,
      client: {
        billing: SERVER_PATH + "/client/api/" + "billing"
      }
    });
})();
