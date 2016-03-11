(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientEventsShowCtrl', function($scope, currentEvent) {
    $scope.event = currentEvent;
  });

})();
