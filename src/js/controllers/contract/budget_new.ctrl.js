(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferBudgetNewCtrl',
			function($scope, $stateParams, OfferResource) {

        OfferResource.get({ id: $stateParams.offerId }, setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

        $scope.sendBudget = function() {
					console.log('confirmed');
        }

			});

})();
