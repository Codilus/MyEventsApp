(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('ContractPromotersCtrl',
      function($scope, $stateParams, Promoter) {

        $scope.eventId = $stateParams.eventId;

        Promoter.getAll().then(setPromoters);

        function setPromoters(promoters) {
          $scope.promoters = promoters;
        }

      });

})();
