(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventOffersCtrl',
      function($scope, $stateParams, OfferResource) {

        $scope.eventId = parseInt($stateParams.eventId);

        OfferResource.query({ by_event_id: $scope.eventId }, setOffers);

        function setOffers(offers) {
          $scope.offers = offers;
        }

      });

})();
