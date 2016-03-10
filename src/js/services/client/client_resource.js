(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('ClientResource', function($q) {
			var clients = [
        { id: 1, name: 'Client 1' },
        { id: 2, name: 'Client 2' },
        { id: 3, name: 'Client 3' },
        { id: 4, name: 'Client 4' },
        { id: 5, name: 'Client 5' },
        { id: 6, name: 'Client 6' },
        { id: 7, name: 'Client 7' },
        { id: 8, name: 'Client 8' },
        { id: 9, name: 'Client 9' },
        { id: 10, name: 'Client 10' }
      ];

			return {
				$get: function() {
					return $q(function(resolve) {
						resolve(clients);
					});
				}
			};
		});

})();
