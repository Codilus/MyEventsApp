(function() {
  'use strict';

  var SERVER_PATH = "http://localhost:3000";

  angular.module('MyEventsApp')
  .constant("Paths", {
    server: SERVER_PATH,
    api: SERVER_PATH,
    client: {
      events: SERVER_PATH + "/client/api/" + "events"
    }
  });
})();
