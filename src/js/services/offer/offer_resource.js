(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('OfferResource', function($resource) {
			return $resource('/offers/:id', { id:'@id' });
		});

})();
