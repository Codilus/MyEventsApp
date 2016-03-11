(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicModal, $auth, $state) {
    $scope.user = {email: "joao@joao.com", password: "123123123"};
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
