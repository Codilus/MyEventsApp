(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferBudgetNewCtrl',
			function($scope, $stateParams, OfferResource) {

        Promoter.get($stateParams.offerId)
          .then(setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

        $scope.sendBudget = function() {
					console.log('confirmed');
        }

			});

})();
