(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicModal, $auth, $state) {
    $scope.user = {};
    $scope.login = login;

    ////////////////////////////////

    function login() {
      $auth.submitLogin($scope.user).then(function(result) {
        $state.go("client.home");
      }, function(err) {
        console.log(err);
      });
    }
  });

})();
