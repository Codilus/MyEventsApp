(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientEventsNewCtrl', function($scope, ClientEventResource, $state) {
    $scope.event = new ClientEventResource();
    $scope.save = save;

    ////////////////////////////////

    function save() {
      $scope.event.$save()
        .then(function(resp) {
          // handle success response
          console.log(resp);
          $state.go("home");
        })
        .catch(function(resp) {
          // handle error response
          console.log(resp);
        });
    }
  });

})();
