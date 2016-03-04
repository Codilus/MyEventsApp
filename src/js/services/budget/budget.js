(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('Budget', function($resource) {

			return $resource('/contracts/:id', { id:'@id' });

		});

})();
