(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicModal, $auth) {
    $scope.user = {};
    $scope.login = login;


    ////////////////////////////////

    function login() {
      console.log($scope.user);
      $auth.submitLogin($scope.user).then(console.log.bind(console), console.log.bind(console));
    }
  });

})();
