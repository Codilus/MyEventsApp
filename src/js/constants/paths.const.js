(function() {
  'use strict';

  var SERVER_PATH = "http://localhost:3000";

  angular.module('MyEventsApp')
    .constant("Paths", {
      server: SERVER_PATH,
      api: SERVER_PATH,
      promoter: {
        billing: SERVER_PATH + "/promoter/api/" + "billing"
      }
    });
})();
