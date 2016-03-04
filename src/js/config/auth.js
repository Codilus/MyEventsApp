(function() {
  'use strict';

  angular.module('MyEventsApp')
    .config(function($authProvider) {
      $authProvider.configure({
        apiUrl: 'http://localhost:3001/clients',
        storage: "localStorage",
        forceValidateToken: true
      });
    });

})();
