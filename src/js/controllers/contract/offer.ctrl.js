(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferOfferCtrl',
			function($scope, $stateParams, OfferResource, $location) {

        OfferResource.get({ id: $stateParams.offerId }, setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

        $scope.createOffer = function() {
          $location.path('/app/offer/offers/' + $scope.offer.id + '/budget/new');
        }

			});

})();
