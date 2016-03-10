(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferDetailsCtrl',
			function($scope, $stateParams, OfferResource, $location) {

        OfferResource.get({ id: $stateParams.offerId }, setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

        $scope.createOffer = function() {
          $location.path('/app/offers/' + $scope.offer.id + '/budget/new');
        }

			});

})();