(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('Promoter', function($q) {
      var promoters = [
        { id: 1, name: 'Promoter 1', rating: 1 },
        { id: 2, name: 'Promoter 2', rating: 3 },
        { id: 3, name: 'Promoter 3', rating: 2 },
        { id: 4, name: 'Promoter 4', rating: 3 },
        { id: 5, name: 'Promoter 5', rating: 5 },
        { id: 6, name: 'Promoter 6', rating: 3 },
        { id: 7, name: 'Promoter 7', rating: 3 },
        { id: 8, name: 'Promoter 8', rating: 5 },
        { id: 9, name: 'Promoter 9', rating: 1 },
        { id: 10, name: 'Promoter 10', rating: 3 },
      ];

			return {
				getAll: function() {
          return $q(function(resolve, reject) {
            resolve(promoters);
          });
				},
        get: function(id) {
          return $q(function(resolve, reject) {
            var promoter = promoters.find(function(promoter) {
              return promoter.id == id;
            });

            resolve(promoter);
          });
        }
			};
		});


})();
