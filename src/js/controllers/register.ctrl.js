(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('RegisterCtrl', function($scope, $ionicModal, $auth, $state) {
    $scope.user = {
      type: "Promoter"
    };
    $scope.register = register;

    ////////////////////////////////

    function register() {
      $auth.submitRegistration($scope.user)
        .then(function(resp) {
          $state.go("home");
        })
        .catch(function(resp) {
          // handle error response
        });

    }
  });

})();
