(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientHomeCtrl', function($scope, ClientEventResource) {
    $scope.events = [
      {name: "Casamentoo", date: new Date()},
      {name: "Casamentoo", date: new Date()},
      {name: "Casamentoo", date: new Date()},
      {name: "Casamentoo", date: new Date()},
    ]

    ClientEventResource.query();
  });

})();
