(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('LoginCtrl', function($scope, $ionicPopup, $auth, $state, $ionicLoading) {
    $scope.user = {};
    $scope.login = login;

    ////////////////////////////////

    function login() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>  '
      });
      $auth.submitLogin($scope.user).then(function(result) {
        $ionicLoading.hide();
        $state.go("client.home");
      }, function(err) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Email ou senha errados!'
        });
        console.log(err);
      });
    }
  });

})();
