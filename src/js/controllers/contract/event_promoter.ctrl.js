(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventPromoterCtrl',
			function($scope, $stateParams, PromoterResource, OfferResource, $location) {

        PromoterResource.get({ id: $stateParams.promoterId }, setPromoter);

        function setPromoter(promoter) {
          $scope.promoter = promoter;
        }

        $scope.requestBudget = function() {
          buildOfferResource().$save()
            .then(returnToPromoters);
        }

        function returnToPromoters() {
          alert('Solicitação feita com sucesso!');
          $location.path('/app/offer/events/' + $stateParams.eventId + '/promoters');
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
