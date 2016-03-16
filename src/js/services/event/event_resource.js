(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .factory('EventResource', function($q) {
			var events = [
        {
					id: 3,
					name: 'Event 3',
					offers: []
				},
        {
					id: 10,
					name: 'Event 10',
					offers: [
						{ id: 10, status: 'PENDING_CONFIRMATION', budget_price: 1000, budget_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget risus at risus consequat ullamcorper. Pellentesque feugiat, purus vitae fermentum suscipit, sem nibh vestibulum magna, in faucibus urna turpis eu purus. Quisque sagittis magna eget massa aliquam, vulputate tristique tortor iaculis.' }
					]
				},
        {
					id: 1,
					name: 'Event 1',
					offers: [
						{ id: 12, status: 'PENDING_CONFIRMATION', budget_price: 1000, budget_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget risus at risus consequat ullamcorper. Pellentesque feugiat, purus vitae fermentum suscipit, sem nibh vestibulum magna, in faucibus urna turpis eu purus. Quisque sagittis magna eget massa aliquam, vulputate tristique tortor iaculis.' },
						{ id: 12, status: 'PENDING_CONFIRMATION', budget_price: 1000, budget_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget risus at risus consequat ullamcorper. Pellentesque feugiat, purus vitae fermentum suscipit, sem nibh vestibulum magna, in faucibus urna turpis eu purus. Quisque sagittis magna eget massa aliquam, vulputate tristique tortor iaculis.' }
					]
				},
        {
					id: 20,
					name: 'Event 20',
					offers: [
						{ id: 11, status: 'PENDING_CONFIRMATION', budget_price: 1001, budget_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget risus at risus consequat ullamcorper. Pellentesque feugiat, purus vitae fermentum suscipit, sem nibh vestibulum magna, in faucibus urna turpis eu purus. Quisque sagittis magna eget massa aliquam, vulputate tristique tortor iaculis.' },
						{ id: 12, status: 'PENDING_CONFIRMATION', budget_price: 1200, budget_description: 'Curabitur lobortis enim ex, id varius urna faucibus ut. Pellentesque arcu magna, mollis non urna eu, consectetur scelerisque massa. Mauris ultrices finibus tortor, a sollicitudin mauris tristique congue.' },
						{ id: 13, status: 'PENDING_CONFIRMATION', budget_price: 200, budget_description: 'Donec ipsum turpis, luctus vulputate nulla eget, bibendum viverra sapien. Etiam pharetra imperdiet arcu, ac pulvinar neque tristique a. Curabitur pulvinar elit a ligula accumsan tempus.' }
					]
				}
      ];

			return {
				query: function() {
					return $q(function(resolve) {
						resolve(events);
					});
				},
				get: function(identifier) {
					var id = identifier.id;
					return $q(function(resolve) {
            for (var i = 0; i < events.length; i++) {
              if (events[i].id == id) {
                return resolve(events[i]);
              }
            }
					});
				}
			};
		});

})();
