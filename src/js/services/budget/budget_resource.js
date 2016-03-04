(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('BudgetResource', function($resource) {
			return $resource('/contracts/:id', { id:'@id' });
		});

})();
