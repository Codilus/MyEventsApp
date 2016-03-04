(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('ContractPromoterCtrl',
			function($scope, $stateParams, Promoter) {

        Promoter.get($stateParams.promoterId).then(setPromoter);

        function setPromoter(promoter) {
          $scope.promoter = promoter;
        }

			});

})();
