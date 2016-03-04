(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('ContractPromoterCtrl',
			function($scope, $stateParams, Promoter, BudgetResource) {

        Promoter.get($stateParams.promoterId)
          .then(setPromoter);

        function setPromoter(promoter) {
          $scope.promoter = promoter;
        }

        $scope.requestBudget = function() {
          var budget = new BudgetResource();
          budget.clientId = 1;
          budget.promoterId = $scope.promoter.id;
          budget.$save();
        }

			});

})();
