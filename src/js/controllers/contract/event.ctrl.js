(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventCtrl',
			function($scope, $stateParams, EventResource, OfferResource, $location) {

				$scope.shouldShowOfferButton = false;

        EventResource.get({ id: $stateParams.eventId })
          .then(setEvent);

        function setEvent(event) {
          $scope.event = event;
					$scope.shouldShowOfferButton = $scope.event.offers.length > 0;
        }

				$scope.showOffers = function() {
					var event = $scope.event;
					var offers = event.offers;

					if (offers.length == 1) {
						$location.path('/app/offer/events/' + event.id + '/offers/' + offers[0].id);
					} else if (offers.length > 1) {
						$location.path('/app/offer/events/' + event.id + '/offers');
					}
				}

				$scope.onContractPromoterClicked = function() {
	        $location.path('/app/offer/events/' + $scope.event.id + '/promoters');
	      }

			});

})();
