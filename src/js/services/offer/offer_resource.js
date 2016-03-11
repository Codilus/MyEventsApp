(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('OfferResource', function(BaseUrl, $resource) {
			return $resource(BaseUrl.url + '/offers/:id', { id: '@id' }, {
        update: { method: 'PUT' },
        update_budget: { method: 'PUT', url: '/offers/:id/update_budget', params: { id: '@id' } },
      });
		});

})();
