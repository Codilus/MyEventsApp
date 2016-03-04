(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('ContractPromoterCtrl',
			function($scope, $stateParams, Promoter) {

				$scope.promoter = Promoter.get($stateParams.promoterId);

			});

})();
