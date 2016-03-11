(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventOffersCtrl',
      function($scope, $stateParams, OfferResource) {

        $scope.eventId = parseInt($stateParams.eventId);

        OfferResource.query({ by_client_id: 32 }, setOffers);

        function setOffers(offers) {
          $scope.offers = offers.filter(function(offer) {
						return offer.event_id == $scope.eventId;
					});
        }

      });

})();
