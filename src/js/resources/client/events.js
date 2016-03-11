(function() {
  'use strict';

  angular.module('MyEventsApp')

  .service('ClientEventResource', function($resource, Paths) {

    return $resource(Paths.client.events + "/:id");
  });

})();
