(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferPromoterCtrl',
			function($scope, $stateParams, Promoter, OfferResource, $location) {

        Promoter.get($stateParams.promoterId)
          .then(setPromoter);

        function setPromoter(promoter) {
          $scope.promoter = promoter;
        }

        $scope.requestBudget = function() {
          buildOfferResource().$save()
            .then(returnToPromoters);
        }

        function returnToPromoters() {
          $location.path('/app/offer/event/' + $stateParams.eventId + '/promoters');
          $location.replace();
        }

        function buildOfferResource() {
          var offer = new OfferResource({
            event_id: parseInt($stateParams.eventId),
            promoter_id: $scope.promoter.id
          });
          return offer;
        }

			});

})();
