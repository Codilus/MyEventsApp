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
					$scope.offer.$update_budget()
						.then(function() {
		          $location.path('/app/offer/offers');
		          $location.replace();
						});
        }

			});

})();
