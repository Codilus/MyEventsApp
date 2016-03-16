(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventPromotersCtrl',
      function($scope, $stateParams, PromoterResource, $location) {

        $scope.eventId = $stateParams.eventId;

        PromoterResource.query({}, setPromoters);

        function setPromoters(promoters) {
          $scope.promoters = promoters;
        }

        $scope.onPromoterSelected = function(promoter) {
          $location.path('/app/offer/events/' + $stateParams.eventId + '/promoters/' + promoter.id);
          $location.replace();
        }

      });

})();
