(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventOfferCtrl',
      function($scope, $stateParams, OfferResource, $location) {

        $scope.offerId = parseInt($stateParams.offerId);

        OfferResource.get({ id: $scope.offerId }, setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

        $scope.acceptBudget = function() {
          OfferResource.accept_budget(
            { id: $scope.offer.id }, goToEventScreen, showErrorMessage);
        }

        function goToEventScreen() {
          $location.path('#/app/offer/events/' + $scope.offer.event.id);
          $location.replace();
        }

        $scope.refuseBudget = function() {
          OfferResource.refuse_budget(
            { id: $scope.offer.id }, goToOffersScreen, showErrorMessage);
        }

        function goToOffersScreen() {
          $location.path(
            '#/app/offer/events/' + $scope.offer.event.id + '/offers');
          $location.replace();
        }

        function showErrorMessage(response) {
          alert(response.data.message);
        }

      });

})();
