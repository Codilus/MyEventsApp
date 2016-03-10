(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .controller('OffersCtrl',
			function($scope, OfferResource, CurrentUser) {

        OfferResource.query({ by_promoter_id: CurrentUser.id }, setOffers);

        function setOffers(offers) {
          $scope.offers = offers;
        }

			});

})();
