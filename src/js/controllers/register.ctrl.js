(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('RegisterCtrl', function($scope, $ionicModal, $auth, $state) {
    $scope.user = {
      type: "Client"
    };
    $scope.register = register;

    ////////////////////////////////

    function register() {
      $auth.submitRegistration($scope.user)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });

    }
  });

})();
