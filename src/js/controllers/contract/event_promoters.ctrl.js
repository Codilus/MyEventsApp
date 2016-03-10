(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventPromotersCtrl',
      function($scope, $stateParams, PromoterResource) {

        $scope.eventId = $stateParams.eventId;

        PromoterResource.query({}, setPromoters);

        function setPromoters(promoters) {
          $scope.promoters = promoters;
        }

      });

})();
