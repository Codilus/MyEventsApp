(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientHomeCtrl', function($scope, ClientEventResource) {


    ClientEventResource.query().$promise
      .then(function(events) {
        $scope.events = events;
      });
  });

})();
