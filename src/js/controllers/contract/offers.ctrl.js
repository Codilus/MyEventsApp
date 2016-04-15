(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferOffersCtrl',
			function($scope, OfferResource) {

        $scope.$on('$ionicView.enter', function() {
          OfferResource.query({ by_promoter_id: 2 }, setOffers);
        });

        function setOffers(offers) {
          $scope.offers = offers;
        }

			});

})();
