(function() {
  'use strict';

  angular.module('MyEventsApp')

  .service('ClientBillingResource', function($resource, Paths) {

    return $resource(Paths.client.billing, {}, {
      "query": {method: "GET", isArray: false}
    });
  });

})();
