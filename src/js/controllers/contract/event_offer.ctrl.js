(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('EventOfferCtrl',
      function($scope, $stateParams) {

        $scope.eventId = $stateParams.eventId;

        Promoter.getAll().then(setPromoters);

        function setPromoters(promoters) {
          $scope.promoters = promoters;
        }

      });

})();
