(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientCtrl', function($scope, $auth, $state) {
    $scope.logout = logout;

    ////////////////////////////

    function logout() {
      $auth.signOut().then(function() {
        $state.go("home");
      }, function() {
        $state.go("home");
      });
    }
  });

})();
