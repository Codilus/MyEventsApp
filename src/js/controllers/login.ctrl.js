(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicModal, $auth, $state) {
    $scope.user = {};
    $scope.login = login;

    ////////////////////////////////

    function login() {
      $auth.submitLogin($scope.user).then(function() {
        $state.go("promoter.home");
      }, function(err) {
        console.log(err);
      });

    }
  });

})();
