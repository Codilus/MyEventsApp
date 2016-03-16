(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventCtrl',
			function($scope, $stateParams, EventResource, OfferResource, $location) {

				$scope.shouldShowOfferButton = false;

        EventResource.get({ id: $stateParams.eventId })
          .then(setEvent)
          .then(getEventOffers);

        function setEvent(event) {
          $scope.event = event;
        }

        function getEventOffers() {
          OfferResource
            .query({ by_event_id: $scope.event.id }, setOffersAndUpdateButton);
        }

        function setOffersAndUpdateButton(offers) {
          $scope.offers = offers;
					$scope.shouldShowOfferButton = $scope.offers.length > 0;
        }

				$scope.showOffers = function() {
					if ($scope.offers.length == 1) {
						$location.path(buildPathForOffer($scope.offers[0]));
					} else if ($scope.offers.length > 1) {
						$location.path(buildPathForEvent($scope.event));
					}
				}

        function buildPathForEvent(event) {
          return '/app/offer/events/' + event.id + '/offers';
        }

        function buildPathForOffer(offer) {
          return '/app/offer/events/' + offer.event.id + '/offers/' + offer.id;
        }

				$scope.onContractPromoterClicked = function() {
	        $location.path('/app/offer/events/' + $scope.event.id + '/promoters');
	      }

			});

})();
