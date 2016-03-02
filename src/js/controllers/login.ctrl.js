(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicModal, $timeout) {
    $scope.user = {};
    $scope.login = login;


    ////////////////////////////////

    function login() {
      console.log($scope.user);
    }
  });

})();
