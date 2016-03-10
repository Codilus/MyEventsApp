(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferBudgetNewCtrl',
			function($scope, $stateParams, OfferResource, $location) {

        OfferResource.get({ id: $stateParams.offerId }, setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

        $scope.sendBudget = function(budgetPrice, budgetDescription) {
					$scope.offer.budget_price = budgetPrice;
					$scope.offer.budget_description = budgetDescription;
					$scope.offer.status = "PENDING_CONFIRMATION";
					$scope.offer.$update()
						.then(function() {
		          $location.path('/app/offers');
		          $location.replace();
						});
        }

			});

})();
