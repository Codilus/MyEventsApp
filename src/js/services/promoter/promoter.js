(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('Promoter', function() {
			return {
				getAll: function() {
					return [
						{ name: 'Promoter 1', rating: 1 },
						{ name: 'Promoter 2', rating: 3 },
						{ name: 'Promoter 3', rating: 2 },
						{ name: 'Promoter 4', rating: 3 },
						{ name: 'Promoter 5', rating: 5 },
						{ name: 'Promoter 6', rating: 3 },
						{ name: 'Promoter 7', rating: 3 },
						{ name: 'Promoter 8', rating: 5 },
						{ name: 'Promoter 9', rating: 1 },
						{ name: 'Promoter 10', rating: 3 },
					];
				}
			};
		});


})();
