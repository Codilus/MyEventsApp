(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('ContractPromotersCtrl', function($scope, Promoter) {

      Promoter.getAll().then(setPromoters);

      function setPromoters(promoters) {
  			$scope.promoters = promoters;
      }

		});

})();
