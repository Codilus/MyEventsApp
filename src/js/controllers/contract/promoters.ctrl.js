(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('ContractPromotersCtrl', function($scope, Promoter) {

			$scope.promoters = Promoter.getAll();

		});


})();
