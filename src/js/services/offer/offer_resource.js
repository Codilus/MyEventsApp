(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('OfferResource', function(BaseUrl, $resource) {
			return $resource(BaseUrl.url + '/offers/:id', { id: '@id' }, {
        accept_budget: { method: 'GET', url: '/offers/:id/accept_budget' },
        refuse_budget: { method: 'GET', url: '/offers/:id/refuse_budget' },
        update_budget: { method: 'PUT', url: '/offers/:id/update_budget', params: { id: '@id' } },
      });
		});

})();
