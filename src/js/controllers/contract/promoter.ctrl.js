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
          var budget = buildBudget();
          budget.$save();
        }

        function buildBudget() {
          var budget = new BudgetResource();
          budget.eventId = parseInt($stateParams.eventId);
          budget.promoterId = $scope.promoter.id;
          return budget;
        }

			});

})();
