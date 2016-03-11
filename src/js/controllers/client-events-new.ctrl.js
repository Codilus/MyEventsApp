(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientEventsNewCtrl', function($scope, ClientEventResource) {
    $scope.event = new ClientEventResource();
    $scope.save = save;

    ////////////////////////////////

    function save() {
      $scope.event.$save()
        .then(function(resp) {
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) {
          // handle error response
          console.log(resp);
        });
    }
  });

})();
