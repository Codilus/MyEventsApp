(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('PromoterDashboardCtrl', function($scope, Event) {
    $scope.events = Event.getAll();
  });

})();
