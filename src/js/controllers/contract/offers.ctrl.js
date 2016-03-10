(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OfferOffersCtrl',
			function($scope, OfferResource) {

        OfferResource.query({ by_promoter_id: 31 }, setOffers);

        function setOffers(offers) {
          $scope.offers = offers;
        }

			});

})();
