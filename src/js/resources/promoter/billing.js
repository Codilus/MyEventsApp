(function() {
  'use strict';

  angular.module('MyEventsApp')

  .service('PromoterBillingResource', function($resource, Paths) {
    return $resource(Paths.promoter.billing, {}, {
      "query": {
        method: "GET",
        isArray: false
      }
    });
  });

})();
