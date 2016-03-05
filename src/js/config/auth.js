(function() {
  'use strict';

  angular.module('MyEventsApp')
    .config(function($authProvider, Paths) {
      $authProvider.configure({
        apiUrl: Paths.api,
        storage: "localStorage",
      });
    });

})();
