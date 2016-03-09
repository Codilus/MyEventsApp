(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferPromotersCtrl',
      function($scope, $stateParams, Promoter) {

        $scope.eventId = $stateParams.eventId;

        Promoter.getAll().then(setPromoters);

        function setPromoters(promoters) {
          $scope.promoters = promoters;
        }

      });

})();
