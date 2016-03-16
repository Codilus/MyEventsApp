(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferEventOfferCtrl',
      function($scope, $stateParams, OfferResource) {

        $scope.offerId = parseInt($stateParams.offerId);

        OfferResource.get({ id: $scope.offerId }, setOffer);

        function setOffer(offer) {
          $scope.offer = offer;
        }

      });

})();
