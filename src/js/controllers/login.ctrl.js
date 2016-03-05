(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicModal, $auth, $http) {
    $scope.user = {email: "joao@joao.com", password: "123123123"};
    $scope.login = login;


    ////////////////////////////////

    function login() {
      console.log($scope.user);
      $auth.submitLogin($scope.user).then(function(result) {
        console.log(result);
        $http.get("http://localhost:3000/client/api/events");
      }, function(err) {
        console.log(err);
      });

    }
  });

})();
