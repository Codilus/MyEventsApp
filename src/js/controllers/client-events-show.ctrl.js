(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientEventsShowCtrl', function($scope) {
    $scope.event = {name: "Casamentoo", date: new Date()};
  });

})();
