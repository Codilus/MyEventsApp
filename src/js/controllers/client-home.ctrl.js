(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientHomeCtrl', function($scope, ClientEventResource) {
    $scope.$on("$ionicView.enter", function() {
      ClientEventResource.query().$promise
        .then(function(events) {
          $scope.events = events;
        });
    });
  });

})();
